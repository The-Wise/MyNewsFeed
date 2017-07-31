const gulp = require('gulp');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');

// To satrt gulp tasks write "gulp test" in CMD

gulp.task('pre-test', () => {
    gulp.src([
// To be included in test coverage all files should be required in the array
// !!! Not clear why, if required files are more than 13 or 14,others stays not included in test coverage

<<<<<<< HEAD
    './controllers/**/*.js',
//     './routes/**/*.js',
       './models/**/*.js',
        './data/**/*.js',
=======
     './controllers/**/*.js',
//     './routes/**/*.js',
//       './models/**/*.js',
//     './data/**/*.js',
>>>>>>> c6e4d585e7e9931ae54a0e97a4943bd92e1b8232
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
       './test/integration/**/*.js',
    ])
    .pipe(mocha())
    .pipe(istanbul.writeReports());
});
