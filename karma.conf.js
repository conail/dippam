module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['modules/**/*.js'],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserStack: {
      username: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_KEY
    },
    customLaunchers: {
      bs_firefox_mac: { base: 'BrowserStack', browser: 'firefox', browser_version: '21.0', os: 'OS X', os_version: 'Mountain Lion' },
      bs_iphone5: { base: 'BrowserStack', device: 'iPhone 5', os: 'ios', os_version: '6.0' }
    },
    browsers: ['bs_firefox_mac', 'bs_iphone5'],
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}