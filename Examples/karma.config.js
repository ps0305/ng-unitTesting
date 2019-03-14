var path = require('path');

var webpackConfig = require('./test.webpack.config');
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';

module.exports = function (config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks
    // available: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: './karma-shim.js', watched: false }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './karma-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    // test reporter
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha"],

    // web server port
    port: 9800,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    //browserNoActivityTimeout: 150000,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


