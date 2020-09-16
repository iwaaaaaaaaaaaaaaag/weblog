"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var NODE_ENV = (process.env.NODE_ENV || "").trim() || "development";
var IS_DEVELOPMENT = NODE_ENV === "development";
exports.config = {
    env: {
        NODE_ENV: NODE_ENV,
        IS_DEVELOPMENT: IS_DEVELOPMENT
    },
    path: {
        root: "./",
        log: "./log",
        node_modules: "./node_modules",
        input: "./public/source",
        output: "./public/" + NODE_ENV
    },
    sass: {
        outputStyle: IS_DEVELOPMENT ? "expanded" : "compressed",
    },
    uglify: {}
};
//# sourceMappingURL=config.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksYUFBYSxDQUFDO0FBQ3RFLElBQU0sY0FBYyxHQUFHLFFBQVEsS0FBSyxhQUFhLENBQUM7QUFFckMsUUFBQSxNQUFNLEdBQUc7SUFDbEIsR0FBRyxFQUFFO1FBQ0QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsY0FBYyxFQUFFLGNBQWM7S0FDakM7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsSUFBSTtRQUNWLEdBQUcsRUFBRSxPQUFPO1FBQ1osWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLE1BQU0sRUFBRSxjQUFZLFFBQVU7S0FDakM7SUFDRCxJQUFJLEVBQUU7UUFDRixXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQXlDO0tBQ3ZGO0lBQ0QsTUFBTSxFQUFFLEVBQUU7Q0FDVCxDQUFBO0FBQ0wsa0NBQWtDIn0=