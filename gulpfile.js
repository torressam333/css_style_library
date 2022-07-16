const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile sass to css and output in a css file
const compileStyles = () => {
  return src('styles.scss').pipe(sass()).pipe(dest('css'));
};

// Re-compile when styles change
const watchSass = () => {
  // File to watch
  watch(['styles.scss'], compileStyles);
};

exports.default = series(compileStyles, watchSass);
