var gulp=require('gulp');
var liveServer=require('gulp-live-server');
var broweserSync=require('browser-sync');
var browseriFy=require('browserify');
var reactiFy=require('reactify');
var source=require('vinyl-source-stream');

gulp.task('live-server',function(){
    var server=new liveServer('server/main.js');
    server.start();
})

gulp.task('bundle',['copy'],function(){
return browseriFy({
    entries:'app/main.jsx',
    debug:true
})
.transform(reactiFy)
.bundle()
.pipe(source('app.js'))
.pipe(gulp.dest('./.tmp'));
})

gulp.task('copy',function(){
    gulp.src(['app/*.css'])
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve',['bundle','live-server'],function(){
    broweserSync.init(null,{
        proxy:"http://localhost:4444",
        port:3333
    })
})