import {config} from "../config"
import gulp from "gulp"
import del from "del"

gulp.task("copy-third_party.clean", (done) => {
    return del("./third_party/**", {cwd: config.path.output})
})

gulp.task("copy-third_party.jquery", (done) => {
    gulp.src("./jquery/dist/**", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/jquery", { cwd: config.path.output }))
    done()
})

gulp.task("copy-third_party.popper.js", (done) => {
    gulp.src("./popper.js/dist/**", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/popper.js", { cwd: config.path.output }))
    done()
})

gulp.task("copy-third_party.bootstrap", (done) => {
    gulp.src("./bootstrap/dist/**", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/bootstrap", { cwd: config.path.output }))
    done()
})

gulp.task("copy-third_party.font-awesome", (done) => {
    gulp.src("./font-awesome/**", { cwd: config.path.node_modules })
    .pipe(gulp.dest("./third_party/font-awesome", { cwd: config.path.output }))
    done()
})


gulp.task("copy-third_party",gulp.series("copy-third_party.clean","copy-third_party.jquery","copy-third_party.popper.js","copy-third_party.bootstrap","copy-third_party.font-awesome"))