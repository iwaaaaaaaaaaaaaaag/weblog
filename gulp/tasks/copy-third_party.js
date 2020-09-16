"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var gulp_1 = __importDefault(require("gulp"));
var del_1 = __importDefault(require("del"));
gulp_1.default.task("copy-third_party.clean", function (done) {
    return del_1.default("./third_party/**", { cwd: config_1.config.path.output });
});
gulp_1.default.task("copy-third_party.jquery", function (done) {
    gulp_1.default.src("./jquery/dist/**", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/jquery", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.popper.js", function (done) {
    gulp_1.default.src("./popper.js/dist/**", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/popper.js", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.bootstrap", function (done) {
    gulp_1.default.src("./bootstrap/dist/**", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/bootstrap", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party.font-awesome", function (done) {
    gulp_1.default.src("./font-awesome/**", { cwd: config_1.config.path.node_modules })
        .pipe(gulp_1.default.dest("./third_party/font-awesome", { cwd: config_1.config.path.output }));
    done();
});
gulp_1.default.task("copy-third_party", gulp_1.default.series("copy-third_party.clean", "copy-third_party.jquery", "copy-third_party.popper.js", "copy-third_party.bootstrap", "copy-third_party.font-awesome"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS10aGlyZF9wYXJ0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcHktdGhpcmRfcGFydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvQ0FBZ0M7QUFDaEMsOENBQXVCO0FBQ3ZCLDRDQUFxQjtBQUVyQixjQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtJQUNyQyxPQUFPLGFBQUcsQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUE7QUFDN0QsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFVBQUMsSUFBSTtJQUN0QyxjQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDOUQsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDckUsSUFBSSxFQUFFLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQTtBQUVGLGNBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsVUFBQyxJQUFJO0lBQ3pDLGNBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRSxJQUFJLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN4RSxJQUFJLEVBQUUsQ0FBQTtBQUNWLENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxVQUFDLElBQUk7SUFDekMsY0FBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ2pFLElBQUksQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hFLElBQUksRUFBRSxDQUFBO0FBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQUMsSUFBSTtJQUM1QyxjQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsR0FBRyxFQUFFLGVBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDL0QsSUFBSSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxHQUFHLEVBQUUsZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDM0UsSUFBSSxFQUFFLENBQUE7QUFDVixDQUFDLENBQUMsQ0FBQTtBQUdGLGNBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBQyx5QkFBeUIsRUFBQyw0QkFBNEIsRUFBQyw0QkFBNEIsRUFBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUEifQ==