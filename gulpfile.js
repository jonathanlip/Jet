var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('Common/scss/*.scss')
	.pipe(sass())//using gulp-sss
	.pipe(gulp.dest('Common/css'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir: './'
		},
	})
})

gulp.task('watch',  ['browserSync','sass'], function(){
	gulp.watch('Common/scss/**/*.scss', ['sass']);
})	
