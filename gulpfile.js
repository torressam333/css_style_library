const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile sass to css and output in a css DIR in the root dir
const compileStyles = () => {
  // https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
  return src('styles.scss').pipe(sass()).pipe(dest('css'));
};

// Re-compile when styles change
const watchSass = () => {
  // File to watch with delay to ensure performant
  watch(['styles.scss'], { delay: 200 }, compileStyles);
};

exports.default = series(compileStyles, watchSass);
