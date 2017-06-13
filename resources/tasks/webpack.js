'use strict';

var gulp = require('gulp')
  , webpackStream = require('webpack-stream')
  , Elixir = require('laravel-elixir')
  , config = Elixir.config
  , webpack = webpackStream.webpack;

/*
 * ---------------------------------------
 * Create webpack mixin for laravel Elixir
 * ---------------------------------------
 */
Elixir.extend('webpack', function(entry) {
  /*
   * Set up compilation of the frontend javascript application
   */
  var webpackConfig = {
    context: config.rootPath + config.get('assets.js.folder'),

    entry: entry,

    output: {
      path: config.rootPath + config.get('public.js.folder'),
      publicPath: config.js.folder + '/',
      filename: '[name].js',
      chunkFilename: 'chunk-[chunkhash].js'
    },

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components|extra_components)/,
          loader: 'babel-loader',
          query: {
            optional: ['runtime'],
            stage: 0
          }
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: "file-loader?name=" + config.rootPath + config.get('public.images.folder') + "/webpack/[name].[ext]"
        }
      ]
    },

    /*
     * I don't think we are going to use any package from bower, as most of them are presented within npm
     * but I added the following lines just in case, for instance if there is some subtle package may be found
     * only in bower repository
     */
    resolve: {
      alias: {
        bower: config.rootPath + 'bower_components',
        extra: config.rootPath + 'resources/extra_components',
        app:   config.rootPath + 'resources/assets/js'
      },
      extensions: [ '', '.js', '.jsx' ]
    },

    plugins: [
      // bower.json resolving
      new webpack.ResolverPlugin(
        [ new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']) ],
        [ 'normal', 'loader' ]
      ),

      // disable dynamic requires - everything you need should be required explicitly
      new webpack.ContextReplacementPlugin(/.*$/, /a^/),

      // expose global libraries
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'React': 'react',
        'ReactDOM': 'react-dom',
        'jQuery': 'jquery',
        '$': 'jquery'
      }),

      // define global variables
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(config.production ? 'production' : 'development')
        }
      })
    ]
  };

  /*
   * Add some production oriented configs
   */
  if (config.production) {
    webpackConfig.plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  } else {
    webpackConfig.devtool = 'source-map';
    webpackConfig.debug = true;
  }


  /*
   * Initialize Elixir webpack task
   */
  new Elixir.Task('webpack', function() {
    return (
      gulp
        .src([])
        .pipe(webpackStream(webpackConfig))
        .on('error', function(err) {
          new Elixir.Notification('Webpack Compilation Failed!');

          this.emit('end');
        })
        .pipe(gulp.dest(webpackConfig.output.path))
        .pipe(new Elixir.Notification('Webpack Compiled!'))
    )
  })
  .watch(config.get('assets.js.folder') + '/**/*.{js,jsx}');

});

