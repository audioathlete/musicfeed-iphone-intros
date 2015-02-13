var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    less = require('gulp-less');

function swallowError( error ) {
    //  If you want details of the error in the console
    console.error( error.toString() );
    this.emit('end');
};

gulp.task('copy', function() {
    gulp.src('./bower_components/hammerjs/hammer.min.js')
        .pipe( gulp.dest('./dist/js') );
    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe( gulp.dest('./dist/js') );
    gulp.src('./bower_components/angular/angular.min.js')
        .pipe( gulp.dest('./dist/js') );
    gulp.src('./bower_components/angular-animate/angular-animate.min.js')
        .pipe( gulp.dest('./dist/js') );
});

gulp.task('less', function () {
    return gulp.src('./src/less/style.less')
        .pipe( less({ compress: true }) )
        .pipe( gulp.dest('./dist/styles') )
        .on('error', swallowError );
});

gulp.task('app', function() {
    return gulp.src([
            './assets-src/js-angular/app.js',
            './assets-src/js-angular/**/*.js'
        ])
        .pipe( concat('musicfeed-angular-app.js') )
        .pipe( gulp.dest('./dist/js') )
        .pipe( uglify() )
        .pipe( rename('musicfeed-angular-app.min.js') )
        .pipe( gulp.dest('./dist/js') )
        .on('error', swallowError );
});

gulp.task('watch', function() {
    gulp.watch( ['/src/less/*.less'], ['less'] )
        .on('change', function( event ) {
            console.log('File '+ event.path +' was '+ event.type +', running tasks...');
        });
    gulp.watch( ['/src/js-angular/**/*.js'], ['app'] )
        .on('change', function( event ) {
            console.log('File '+ event.path +' was '+ event.type +', running tasks...');
        });
});

gulp.task('default', function(done) {
    runSequence('less', 'app', 'copy', done );
});
