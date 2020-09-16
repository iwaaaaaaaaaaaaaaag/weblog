import {config} from "../config"
import gulp from "gulp"
import del from "del"
import uglify from "gulp-uglify"


gulp.task("minify-javascripts.clean", (done) => {
    return del("./javascripts/**", {cwd: config.path.output})
})

gulp.task("minify-javascripts.copy", (done) => {
    gulp.src("./javascripts/**/*.js", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }))
    done()
})

gulp.task("minify-javascripts",gulp.series("minify-javascripts.clean","minify-javascripts.copy"))