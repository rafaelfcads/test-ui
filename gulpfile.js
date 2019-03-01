const gulp = require('gulp')
const notify = require('gulp-notify')
const source = require('vinyl-source-stream')
const browserify = require('browserify')
const babelify = require('babelify')
const ngAnnotate = require('browserify-ngannotate')
const browserSync = require('browser-sync').create()
const rename = require('gulp-rename')
const templateCache = require('gulp-angular-templatecache')
const uglify = require('gulp-uglify')
const merge = require('merge-stream')

const jsFiles   = "app/**/*.js"
const viewFiles = "app/**/*.html"

const interceptErrors = (error) => {
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args)

  this.emit('end')
}


gulp.task('browserify', ['views'], () =>  
  browserify('./app/app.js')
    .transform(babelify, {presets: ["es2015"]})
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'))
)

gulp.task('html', () => gulp
  .src("app/index.html")
  .on('error', interceptErrors)
  .pipe(gulp.dest('./build/'))
)

gulp.task('css', () => gulp
  .src("./server/public/css/style.css")
  .on('error', interceptErrors)
  .pipe(gulp.dest('./build/'))
)

gulp.task('views', () => gulp
  .src(viewFiles)
  .pipe(templateCache({
    standalone: true
  }))
  .on('error', interceptErrors)
  .pipe(rename("app.templates.js"))
  .pipe(gulp.dest('./app/config/'))
)

gulp.task('build', ['html', 'browserify', 'css'], () => {
  const html = gulp
    .src("build/index.html")
    .pipe(gulp.dest('./dist/'))

  const css = gulp
  .src("./server/public/css/style.css")
  .pipe(gulp.dest('./dist/'))

  const js = gulp
    .src("build/main.js")
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))

  return merge(html, css,js)
})

gulp.task('default', ['html', 'browserify', 'css'], () => {

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  })

  gulp.watch("app/index.html", ['html'])
  gulp.watch(viewFiles, ['views'])
  gulp.watch(jsFiles, ['browserify'])
})
