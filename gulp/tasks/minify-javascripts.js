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
    return del_1.default("./javascripts/**", { cwd: config_1.config.path.output });
});
gulp_1.default.task("minify-javascripts.copy", function (done) {
    gulp_1.default.src("./javascripts/**/*.js", { cwd: config_1.config.path.input })
        .pipe(gulp_uglify_1.default(config_1.config.uglify))
        .pipe(gulp_1.default.dest("./javascripts", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("minify-javascripts", gulp_1.default.series("minify-javascripts.clean", "minify-javascripts.copy"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaWZ5LWphdmFzY3JpcHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWluaWZ5LWphdmFzY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0NBQWdDO0FBQ2hDLDhDQUF1QjtBQUN2Qiw0Q0FBcUI7QUFDckIsNERBQWdDO0FBR2hDLGNBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsVUFBQyxJQUFJO0lBQ3ZDLE9BQU8sYUFBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQTtBQUM3RCxDQUFDLENBQUMsQ0FBQTtBQUVGLGNBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsVUFBQyxJQUFJO0lBQ3RDLGNBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1RCxJQUFJLENBQUMscUJBQU0sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0IsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlELElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFDLGNBQUksQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFBIn0=