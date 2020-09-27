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
//req.urlは/*以降のパスが入る
exports.router.get("/*", function (req, res) {
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("posts").findOne({
            url: req.url
        }, {
            projection: { _id: 0 }
        }).then(function (doc) {
            res.json(doc);
        }).catch(function (error) {
            throw error;
        }).then(function (_) {
            client.close();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyREFBK0M7QUFDL0Msb0RBQTRCO0FBQzVCLG9EQUFpQztBQUdwQixRQUFBLE1BQU0sR0FBRyxpQkFBTSxFQUFFLENBQUE7QUFFOUIsb0JBQW9CO0FBQ3BCLGNBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdEIsaUJBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQU0sQ0FBQyxjQUFjLEVBQUUsdUJBQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNyRSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLHVCQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0IsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO1NBQ2YsRUFBQztZQUNFLFVBQVUsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUM7U0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWM7WUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE0QjtZQUNsQyxNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDTCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=