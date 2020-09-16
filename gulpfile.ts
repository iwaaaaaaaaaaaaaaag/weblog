import {config} from "./gulp/config"
import gulp from "gulp"
import load from "require-dir"

load("./gulp/tasks", {recurse: true})

const development = [
    "copy-third_party",
    "copy-images",
    "copy-javascripts",
    "compile-sass"
]

const production = [
    "copy-third_party",
    "copy-images",
    "minify-javascripts",
    "compile-sass"]


gulp.task("default",gulp.series(config.env.IS_DEVELOPMENT ? development : production))