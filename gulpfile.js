// 编写gulp管理文件的任务的
// EMCA6 const 声明"常量" (这个变量一旦被声明，就没有办法被修改)
const gulp = require("gulp");
// const php  = require('gulp-php');

//拷贝html文件
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task("images", function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//数据
gulp.task("data", function(){
	return gulp.src("data/*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//js文件
gulp.task("scripts", function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})
gulp.task("copyhtmls", function(){
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})
gulp.task("php", function(){
	return gulp.src("php/*.php")
	.pipe(gulp.dest("dist/php"))
	.pipe(connect.reload());
})


//建立工程
gulp.task("build", ['copy-html', 'images', 'scripts', 'data', 'scss','copyhtmls','inconfont','inconfont1','php','login','shop','balance'], function(){
	console.log('工程建立成功');
})

//scss文件 gulp-sass-china(windows)  gulp-scss
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task('scss', function(){
	return gulp.src("index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('inconfont', function(){
	return gulp.src("css/iconfont.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("iconfont.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('inconfont1', function(){
	return gulp.src("css/iconfont3.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("iconfont3.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('balance', function(){
	return gulp.src("css/balance.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("balance.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('login', function(){
	return gulp.src("css/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task('shop', function(){
	return gulp.src("css/shopmsg.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shopmsg.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

/*
	gulp监听
 */

gulp.task("watch", function(){
	gulp.watch("*.html", ['copy-html']);
	gulp.watch("images/**/*", ['images']);
	gulp.watch("data/*.json", ['data']);
	gulp.watch("js/*.js", ['scripts']);
	gulp.watch("index.scss", ['scss']);
	gulp.watch("css/inconfont.scss", ['inconfont']);
	gulp.watch('php/*.php',['php']);
	gulp.watch('css/login.scss',['login']);
	gulp.watch('css/shopmsg.scss',['shop']);
	gulp.watch('html/*.html',['copyhtmls']);
	gulp.watch('css/balance.scss',['balance']);
})

/*
	启动服务

 */
const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: 'dist', 
		port: 9999,
		livereload: true //设置实时刷新
	})
})


// 默认任务
gulp.task("default", ['watch', 'server','build']);












