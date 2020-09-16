"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./gulp/config");
var gulp_1 = __importDefault(require("gulp"));
var require_dir_1 = __importDefault(require("require-dir"));
require_dir_1.default("./gulp/tasks", { recurse: true });
var development = [
    "copy-third_party",
    "copy-images",
    "copy-javascripts",
    "compile-sass"
];
var production = [
    "copy-third_party",
    "copy-images",
    "minify-javascripts",
    "compile-sass"
];
gulp_1.default.task("default", gulp_1.default.series(config_1.config.env.IS_DEVELOPMENT ? development : production));
//# sourceMappingURL=gulpfile.js.map