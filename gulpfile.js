const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile sass to css and output in a css DIR in the root dir
const compileStyles = () => {
  // https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
  return src('./resources/sass/styles.scss').pipe(sass()).pipe(dest('css'));
};

// Re-compile when styles change
const watchSass = () => {
  // File to watch with delay to ensure performant
  watch(['./resources/sass/styles.scss'], compileStyles);
};

exports.default = series(compileStyles, watchSass);
