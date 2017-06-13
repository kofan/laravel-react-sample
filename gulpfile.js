'use strict';

var elixir = require('laravel-elixir')
  , gulp = require('gulp')
  , config = elixir.config;

// Expose application root path
config.rootPath = __dirname + '/';

// include vendor elixir tasks
require('laravel-elixir-imagemin');

// include application elixir tasks
require('./resources/tasks/clean');
require('./resources/tasks/webpack');
require('./resources/tasks/browser-sync');


// Check whether it is a watch task
const IS_WATCH = process.argv
  .slice(1)
  .some(function(arg) { return arg.toLowerCase() === 'watch' });


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir(function (mix) {
  /*
   * Clean all the directories
   */
  mix.clean();

  /*
   * Minimy and copy images
   */
  mix.imagemin();

  /*
   * Copy "extra_components" assets
   * (all but javascripts as it should be included with webpack)
   */
  mix.copy(
    config.assetsPath + '/extra_components/**/*.!(js)',
    config.publicPath + '/extra_components/'
  );

  /*
   * Set up SASS compilation
   */
  mix.sass('app.sass');

  /*
   * JS application compile
   */
  mix.webpack({'app.bundle': './app.js'});

  /*
   * Versioning the files
   */
  mix.version(['css/*.css', 'js/!(chunk-)*.js']);


  if (IS_WATCH) {
    /*
     * Run browser with live connection
     */
    mix.browserSync({
      host: 'http://localhost:8000/',
      src: __dirname + '/public/**/*',
      port: 3000 // This is a default port
    });
  }
});
