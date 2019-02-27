const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

gulp.task('app',['app.html','app.css','app.js','app.assets'])

gulp.task('app.html', () =>{
    return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('public'))
})


gulp.task('app.css', () =>{
    
})


gulp.task('app.js', () =>{
    
})

gulp.task('app.assets', ()=>{

})