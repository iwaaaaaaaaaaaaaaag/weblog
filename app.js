"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var app = express_1.default();
var systemlogger_1 = require("./lib/log/systemlogger");
app.set("view engine", "ejs");
app.disable("x-powered-by");
app.use("/public", express_1.default.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));
app.use("/", index_1.router);
//全パスに対しsystemLoggerを実行する
app.use(systemlogger_1.systemLogger());
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTZCO0FBQzdCLHdDQUFvRDtBQUNwRCxJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUE7QUFFckIsdURBQW1EO0FBRW5ELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFcEksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBVyxDQUFFLENBQUE7QUFFMUIseUJBQXlCO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQVksRUFBRSxDQUFDLENBQUE7QUFFdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9