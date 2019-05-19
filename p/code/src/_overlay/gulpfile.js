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
            'src/stylus/overlay.styl'
        ])
        .on('error', console.log)
        .pipe(stylus({compress: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
gulp.task('js', function(){
    gulp.src([
            'src/js/*.js',
            'src/js/parts/*.js'
        ])
        .on('error', console.log)
        .pipe(jsmin())
        .pipe(concat('overlay.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});
gulp.task('tileset', function() {
    var spriteData = gulp.src('src/tiles/*.png')
        .pipe(spritesmith({
            padding: 5, // Отступ от каждой картинки, чтобы при изменении масштаба не задеть рядом стоящую картинку
            imgName: 'tileset.png',
            imgPath: '../img/tileset.png',
            cssName: 'parts/tileset.styl',
            cssFormat: 'stylus',
            algorithm: 'binary-tree'
        }));

    spriteData.img.pipe(gulp.dest('dist/img/'));
    spriteData.css.pipe(gulp.dest('src/stylus/'));
});

// Build Vendor
gulp.task('build-vendor', function () {
    gulp.run(['vendor-js', 'vendor-css']);
});

gulp.task('vendor-js', function () {
    return gulp.src('src/js/vendor/*.js')
        .pipe(jsmin())
        .pipe(concat('overlay.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('vendor-css', function () {
    return gulp.src('src/stylus/vendor/*.css')
        .pipe(cssmin())
        .pipe(concat('overlay.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Build to bb8
gulp.task('bb8-build', function () {
    gulp.run(['bb8-js', 'bb8-css']);
});

gulp.task('bb8-css', function(){
    gulp.src([
            'src/stylus/overlay.styl'
        ])
        .on('error', console.log)
        //.pipe(stylus({compress: true}))
        .pipe(stylus())
//      .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('D:/OpenServer/domains/sites/bb8/backend/application/views/blocks/library.blocks/overlay/'))
});
gulp.task('bb8-js', function(){
    gulp.src([
            'src/js/*.js'
        ])
        .on('error', console.log)
        //.pipe(jsmin())
        //.pipe(concat('overlay.min.js'))
        .pipe(gulp.dest('D:/OpenServer/domains/sites/bb8/backend/application/views/blocks/library.blocks/overlay/'))
});
