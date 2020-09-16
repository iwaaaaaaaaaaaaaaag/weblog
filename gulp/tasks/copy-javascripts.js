"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("copy-javascripts.clean", function (done) {
    return del_1.default("./javascripts/**", { cwd: config_1.config.path.output });
});
gulp_1.default.task("copy-javascripts.copy", function (done) {
    gulp_1.default.src("./javascripts/**", { cwd: config_1.config.path.input })
        .pipe(gulp_1.default.dest("./javascripts", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-javascripts", gulp_1.default.series("copy-javascripts.clean", "copy-javascripts.copy"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1qYXZhc2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcHktamF2YXNjcmlwdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvQ0FBZ0M7QUFDaEMsOENBQXVCO0FBQ3ZCLDRDQUFxQjtBQUVyQixjQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtJQUNyQyxPQUFPLGFBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFVBQUMsSUFBSTtJQUNwQyxjQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkQsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlELElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFDLGNBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBIn0=