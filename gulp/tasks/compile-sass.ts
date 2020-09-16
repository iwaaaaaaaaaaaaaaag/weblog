import {config} from "../config"
import gulp from "gulp"
import del from "del"
import sass from "gulp-sass"


gulp.task("compile-sass.clean", (done) => {
    return del("./stylesheets/**", {cwd: config.path.output})
})

gulp.task("compile-sass.copy", (done) => {
    gulp.src("./stylesheets/**/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(gulp.dest("./stylesheets", { cwd: config.path.output }))
    done()
})

gulp.task("compile-sass",gulp.series("compile-sass.clean","compile-sass.copy"))