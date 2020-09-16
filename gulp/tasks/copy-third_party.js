"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("copy-third_party.clean", function (done) {
    del_1.default("./third_party", { cwd: config_1.config.path.output });
    done();
});
gulp_1.default.task("copy-third_party.jquery", function (done) {
    gulp_1.default.src("./jquery/dist/**/*", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/jquery", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.popper.js", function (done) {
    gulp_1.default.src("./popper.js/dist/**/*", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/popper.js", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.bootstrap", function (done) {
    gulp_1.default.src("./bootstrap/dist/**/*", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/bootstrap", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.font-awesome", function (done) {
    gulp_1.default.src("./font-awesome/**/*", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/font-awesome", { cwd: config_1.config.path.output }));
    done();
});
// jquery pop4per.js bootstrap font-awesome
gulp_1.default.task("copy-third_party", gulp_1.default.series("copy-third_party.clean", "copy-third_party.popper.js", "copy-third_party.bootstrap", "copy-third_party.jquery", "copy-third_party.font-awesome"));
//# sourceMappingURL=copy-third_party.js.map