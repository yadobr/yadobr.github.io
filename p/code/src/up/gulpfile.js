// npm install gulp gulp-watch gulp-livereload gulp-concat gulp-cssmin gulp-jade gulp-stylus gulp-rename gulp-flatten gulp.spritesmith gulp-uncss gulp-jsmin

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    flatten = require('gulp-flatten'),
    spritesmith = require('gulp.spritesmith'),
    uncss = require('gulp-uncss'),
    jsmin = require('gulp-jsmin'),
    livereload = require('gulp-livereload');

gulp.task('watch', function(){

    // Livereload https://github.com/vohof/gulp-livereload
    // В опциях расширения: разрешить открывать файлы по ссылкам
    livereload({
        port: 35729,
        host: 'localhost',
        start: 'true',
        basePath: __dirname+'/dist'
    });
    livereload.listen();

    // Jade
    gulp.watch([
        'src/jade/*.jade',
        'src/jade/parts/*.jade'
    ], ['jade']);

    // Stylus
    gulp.watch([
        'src/stylus/*.styl',
        'src/stylus/parts/*.styl'
    ], ['stylus']);

    // JS
    gulp.watch([
        'src/js/*.js',
        'src/js/parts/*.js'
    ], ['js']);

    // Vendor
    gulp.watch('src/vendor/*.css', ['vendor']);
});

gulp.task('webserver', function() {
    return gulp.src([
            'dist/',
            'dist/js',
            'dist/css',
        ])
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('jade', function(){
    gulp.src([
            'src/jade/*.jade'
        ])
        .on('error', console.log)
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
});
gulp.task('stylus', function(){
    gulp.src([
            'src/stylus/*.styl'
        ])
        .on('error', console.log)
        .pipe(stylus({compress: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
gulp.task('js', function(){
    gulp.src([
            'src/js/*.js'
        ])
        .on('error', console.log)
        .pipe(jsmin())
        .pipe(concat('up.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});
