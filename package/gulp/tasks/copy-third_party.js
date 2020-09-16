"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("clean", function (done) {
    del_1.default("./third_party/**/*", { cwd: config_1.config.path.output });
    done();
});
gulp_1.default.task("jquery", function (done) {
    gulp_1.default.src("./third_party/jquery/dist/**/*", { cwd: config_1.config.path.input })
        .pipe(gulp_1.default.dest("./third_party/jquery", { cwd: config_1.config.path.output }));
    done();
});
// jquery popper.js bootstrap font-awesome
//gulp.task("copy-third_party",gulp.series("clean", gulp.parallel("jquery","popper.js","bootstrap","font-awesome")))
gulp_1.default.task("copy-third_party", gulp_1.default.series("clean", gulp_1.default.parallel("jquery")));
//# sourceMappingURL=copy-third_party.js.map