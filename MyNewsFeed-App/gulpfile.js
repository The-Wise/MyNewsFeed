const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

// To satrt gulp tasks write "gulp test" in CMD

gulp.task('pre-test', () => {
    gulp.src([
// To be included in test coverage all files should be required in the array
// !!! Not clear why, if required files are more than 13 or 14,others stays not included in test coverage

     './controllers/**/*.js',
//     './routes/**/*.js',
//       './models/**/*.js',
//     './data/**/*.js',
//     './config/**/*.js',
//     './utils/validator.js',
    ])
    .pipe(istanbul({
        includeUntested: true,
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    return gulp.src([
// To be included in test exxcution all files should be required in the array
        './test/unit/models/**/*.js',
        './test/unit/routes/**/*.js',
        './test/unit/data/**/*.js',
        './test/unit/controllers/**/*.js',
       // './test/integration/**/*.js',
    ])
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});
