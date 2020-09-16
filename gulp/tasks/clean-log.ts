import {config} from "../config"
import gulp from "gulp"
import del from "del"

gulp.task("clean-log", (done) => {
    return del("./**", {cwd: config.path.log})
})