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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJndWxwZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdDQUFvQztBQUNwQyw4Q0FBdUI7QUFDdkIsNERBQThCO0FBRTlCLHFCQUFJLENBQUMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7QUFFckMsSUFBTSxXQUFXLEdBQUc7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQixDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixjQUFjO0NBQUMsQ0FBQTtBQUduQixjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxjQUFJLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEifQ==