const gulp = require('gulp');
const browserSync = require('browser-sync').create();

//перезагрузка страницы
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.html").on('change', browserSync.reload);
};

exports.serve = bs;