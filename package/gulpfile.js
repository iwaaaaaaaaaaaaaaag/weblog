"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = __importDefault(require("gulp"));
var require_dir_1 = __importDefault(require("require-dir"));
require_dir_1.default("./gulp/tasks", { recurse: true });
gulp_1.default.task("default", function () {
    console.log(process.env.NODE_ENV);
});
//# sourceMappingURL=gulpfile.js.map