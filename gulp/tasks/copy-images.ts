import {config} from "../config"
import gulp from "gulp"
import del from "del"

gulp.task("copy-images.clean", (done) => {
    return del("./images/**", {cwd: config.path.output})
})

gulp.task("copy-images.copy", (done) => {
    gulp.src("./images", { cwd: config.path.input })
    .pipe(gulp.dest("./images", { cwd: config.path.output }))
    done()
})

gulp.task("copy-images",gulp.series("copy-images.clean","copy-images.copy"))