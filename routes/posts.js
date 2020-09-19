"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var mongodb_config_1 = require("../config/mongodb.config");
var express_1 = __importDefault(require("express"));
var mongodb_1 = __importDefault(require("mongodb"));
exports.router = express_1.default();
exports.router.get("/*", function (req, res) {
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("posts").findOne({
            url: req.url
        }).then(function (doc) {
            res.render("./posts/index.ejs", doc);
        }).catch(function (error) {
            throw error;
        }).then(function () {
            client.close();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyREFBK0M7QUFDL0Msb0RBQTRCO0FBQzVCLG9EQUFpQztBQUdwQixRQUFBLE1BQU0sR0FBRyxpQkFBTSxFQUFFLENBQUE7QUFFOUIsY0FBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN0QixpQkFBVyxDQUFDLE9BQU8sQ0FBQyx1QkFBTSxDQUFDLGNBQWMsRUFBRSx1QkFBTSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1FBQ3JFLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsdUJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUM3QixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7U0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBdUI7WUFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN0QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE0QjtZQUNwQyxNQUFNLEtBQUssQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==