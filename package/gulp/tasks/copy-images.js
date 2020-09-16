"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("clean", function (done) {
    del_1.default("./images/**/*", { cwd: config_1.config.path.output });
    done();
});
gulp_1.default.task("copy", function (done) {
    gulp_1.default.src("./images/**/*", { cwd: config_1.config.path.input })
        .pipe(gulp_1.default.dest("./images", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-images", gulp_1.default.series("clean", "copy"));
//# sourceMappingURL=copy-images.js.map