var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('default', function() {
  gulp.start('test');
});

/**
 * Run jasmine tests with karma once and exit
 */
 gulp.task('test', function(done) {
     karma.start({
         configFile: __dirname + '/karma.conf.js',
         singleRun: true
     }, function() {
         done();
     });
 });
