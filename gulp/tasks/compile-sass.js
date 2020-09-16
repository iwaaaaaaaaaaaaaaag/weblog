"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
var gulp_sass_1 = __importDefault(require("gulp-sass"));
gulp_1.default.task("compile-sass.clean", function (done) {
    del_1.default("./stylesheets/**/*", { cwd: config_1.config.path.output });
    done();
});
gulp_1.default.task("compile-sass.compile", function (done) {
    gulp_1.default.src("./stylesheets/**/*.scss", { cwd: config_1.config.path.input })
        .pipe(gulp_sass_1.default(config_1.config.sass))
        .pipe(gulp_1.default.dest("./stylesheets", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("compile-sass", gulp_1.default.series("compile-sass.clean", "compile-sass.compile"));
//# sourceMappingURL=compile-sass.js.map