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
    return del_1.default("./stylesheets/**", { cwd: config_1.config.path.output });
});
gulp_1.default.task("compile-sass.copy", function (done) {
    gulp_1.default.src("./stylesheets/**/*.scss", { cwd: config_1.config.path.input })
        .pipe(gulp_sass_1.default(config_1.config.sass))
        .pipe(gulp_1.default.dest("./stylesheets", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("compile-sass", gulp_1.default.series("compile-sass.clean", "compile-sass.copy"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS1zYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZS1zYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQWdDO0FBQ2hDLDhDQUF1QjtBQUN2Qiw0Q0FBcUI7QUFDckIsd0RBQTRCO0FBRzVCLGNBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxJQUFJO0lBQ2pDLE9BQU8sYUFBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQUMsQ0FBQTtBQUVGLGNBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxJQUFJO0lBQ2hDLGNBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM5RCxJQUFJLENBQUMsbUJBQUksQ0FBQyxlQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkIsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlELElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxjQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQSJ9