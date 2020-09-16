"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("clean-log", function (done) {
    return del_1.default("./**", { cwd: config_1.config.path.log });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW4tbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xlYW4tbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQWdDO0FBQ2hDLDhDQUF1QjtBQUN2Qiw0Q0FBcUI7QUFFckIsY0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxJQUFJO0lBQ3hCLE9BQU8sYUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUE7QUFDOUMsQ0FBQyxDQUFDLENBQUEifQ==