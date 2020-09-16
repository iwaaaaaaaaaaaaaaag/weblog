"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("copy-images.clean", function (done) {
    return del_1.default("./images/**", { cwd: config_1.config.path.output });
});
gulp_1.default.task("copy-images.copy", function (done) {
    gulp_1.default.src("./images", { cwd: config_1.config.path.input })
        .pipe(gulp_1.default.dest("./images", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-images", gulp_1.default.series("copy-images.clean", "copy-images.copy"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1pbWFnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3B5LWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9DQUFnQztBQUNoQyw4Q0FBdUI7QUFDdkIsNENBQXFCO0FBRXJCLGNBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxJQUFJO0lBQ2hDLE9BQU8sYUFBRyxDQUFDLGFBQWEsRUFBRSxFQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUE7QUFDeEQsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFVBQUMsSUFBSTtJQUMvQixjQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQy9DLElBQUksQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6RCxJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUEifQ==