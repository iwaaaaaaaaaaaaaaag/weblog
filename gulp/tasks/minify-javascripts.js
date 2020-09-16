"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
var gulp_uglify_1 = __importDefault(require("gulp-uglify"));
gulp_1.default.task("minify-javascripts.clean", function (done) {
    del_1.default("./javascripts/**/*", { cwd: config_1.config.path.output });
    done();
});
gulp_1.default.task("minify-javascripts.compile", function (done) {
    gulp_1.default.src("./javascripts/**/*", { cwd: config_1.config.path.input })
        .pipe(gulp_uglify_1.default(config_1.config.uglify))
        .pipe(gulp_1.default.dest("./javascripts", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("minify-javascripts", gulp_1.default.series("minify-javascripts.clean", "minify-javascripts.compile"));
//# sourceMappingURL=minify-javascripts.js.map