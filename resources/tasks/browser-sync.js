'use strict';

var gulp = require('gulp')
  , gulpNotify = require('gulp-notify')
  , browserSync = require('browser-sync').create()
  , _ = require('lodash')
  , Elixir = require('laravel-elixir')
  , config = Elixir.config;


if (process.env.DISABLE_NOTIFIER) {
  gulpNotify = function noop() {};
}

/*
 * ------------------------------------------
 * Create browserSync mixin for laravel Elixir
 * ------------------------------------------
 */
Elixir.extend('browserSync', function(options, src) {
  if (options.host) {
    options.proxy = options.host;
    delete options.host;
  }

  if (options.src) {
    src = options.src;
    delete options.src;
  } else if (!src) {
    // By default it's going to listen for the all project sources
    src = [
      config.rootPath + 'app/**/*',
      config.rootPath + 'public/**/*',
      config.rootPath + 'resources/views/**/*'
    ];
  }

  options = _.assign({
    proxy: 'homestead.app',
    logPrefix: 'Laravel Elixir BrowserSync',
    logConnections: true,
    reloadOnRestart: true,
    notify: true,
    reloadDelay: 2000
  }, options);

  gulpNotify.onError = function(err) {
    gulpNotify({
      title: 'BrowserSync',
      subtitule: 'BrowserSync Failed!',
      message: 'Error : <%= error.message %>',
      icon: config.rootPath + 'node_modules/laravel-elixir/icons/fail.png'
    })(err);
  };

  /*
   * Initialize browserSync library
   */
  browserSync.init(options);

  new Elixir.Task('browserSync', function() {
    browserSync.reload();

    return gulp.src('').pipe(gulpNotify({
      title: 'BrowserSync',
      subtitule: 'BrowserSync Loaded!',
      icon: config.rootPath + 'node_modules/laravel-elixir/icons/pass.png',
      message: 'Running...'
    }));

  }).watch(src);
});