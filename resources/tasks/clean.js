'use strict';

var gulp = require('gulp')
  , del = require('del')
  , vinylPaths = require('vinyl-paths')
  , Elixir = require('laravel-elixir')
  , config = Elixir.config;

/*
 * ----------------------------------------------------------------
 * Create mixin to delete the previous step compilation directories
 * ----------------------------------------------------------------
 */
Elixir.extend('clean', function (dirs) {
  dirs = dirs || [
      config.publicPath + '/build',
      config.publicPath + '/css',
      config.publicPath + '/js',
      config.publicPath + '/images',
      config.publicPath + '/extra_components'
  ];

  new Elixir.Task('clean', function() {

    return gulp.src(dirs)
      .pipe(vinylPaths(del))
      .pipe(gulp.dest(config.publicPath));

  });
});
