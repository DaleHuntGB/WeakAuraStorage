const { src, dest, task, watch, series } = require('gulp');

const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const logSymbols = require('log-symbols');
const cleanCSS = require('gulp-clean-css');
const options = require("./package.json").options;

task('dev-styles', () => {
    return src(options.paths.src.css + '/style.pcss')
        .pipe(postcss())
        .pipe(concat({ path: 'style.css' }))
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(dest(options.paths.dist.css))
        .pipe(dest('./src/templates/css'));
});

task('dev-scripts', () => {
    return src([options.paths.src.js + '/**/*.js'])
        .pipe(dest(options.paths.dist.js));
});

task('scripts', () => {
    return src([options.paths.src.js + '/**/*.js'])
        .pipe(uglify())
        .pipe(dest(options.paths.dist.js));
});

task('imgs', (done) => {
    src(options.paths.src.img + '/**/*')
        .pipe(dest(options.paths.dist.img));
    done();
});

task('watch-changes', (done) => {
    watch('./tailwind.config.js', series('dev-styles'));
    watch(options.paths.src.templates + '/**/*.html', series('dev-styles'));
    watch(options.paths.src.css + '/**/*', series('dev-styles'));
    watch(options.paths.src.js + '/**/*.js', series('dev-scripts'));
    watch(options.paths.src.img + '/**/*', series('imgs'));
    console.log("\n\t" + logSymbols.info, "Watching for Changes made to files.\n");
    done();
});

task('clean:dist', () => {
    console.log("\n\t" + logSymbols.info, "Cleaning " + options.paths.dist.base + "\n");
    return del(options.paths.dist.base);
});

task('development', series('clean:dist', 'dev-styles', 'dev-scripts', 'imgs', (done) => {
    console.log("\n\t" + logSymbols.info, "npm run dev is complete.");
    done();
}));

task('optamizedBuild', series('scripts', 'imgs', (done) => {
    console.log("\n\t npm run build is complete");
    done();
}));

exports.default = series('development', 'watch-changes');
exports.build = series('optamizedBuild');