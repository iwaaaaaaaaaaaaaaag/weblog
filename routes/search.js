"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var app_config_1 = require("../config/app.config");
var mongodb_config_1 = require("../config/mongodb.config");
var express_1 = __importDefault(require("express"));
var mongodb_1 = __importDefault(require("mongodb"));
exports.router = express_1.default();
exports.router.get("/", function (req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var keyword = req.query.keyword || "";
    var regexp = new RegExp(".*" + keyword + ".*");
    var query = {
        $or: [{ title: regexp }, { content: regexp }]
    };
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        Promise.all([
            db.collection("posts")
                .find(query)
                .count(),
            db.collection("posts")
                .find(query)
                .sort({ published: -1 })
                .skip((page - 1) * app_config_1.config.search.MAX_ITEM_PER_PAGE)
                .limit(app_config_1.config.search.MAX_ITEM_PER_PAGE)
                .toArray()
        ])
            .then(function (results) {
            var data = {
                keyword: keyword,
                count: results[0],
                list: results[1],
                pagination: {
                    max: Math.ceil(results[0] / app_config_1.config.search.MAX_ITEM_PER_PAGE),
                    current: page
                }
            };
            res.render("./search/list.ejs", data);
        }).catch(function (error) {
            throw error;
        }).then(function () {
            client.close();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLG1EQUEyRDtBQUMzRCwyREFBbUU7QUFDbkUsb0RBQTRCO0FBQzVCLG9EQUFpQztBQUVwQixRQUFBLE1BQU0sR0FBRyxpQkFBTSxFQUFFLENBQUE7QUFFOUIsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNyQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwRSxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDdkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBSyxPQUFPLE9BQUksQ0FBQyxDQUFBO0lBQzNDLElBQU0sS0FBSyxHQUFHO1FBQ1YsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDaEQsQ0FBQTtJQUNELGlCQUFXLENBQUMsT0FBTyxDQUFDLHVCQUFjLENBQUMsY0FBYyxFQUFFLHVCQUFjLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07UUFDckYsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDUixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDWCxLQUFLLEVBQUU7WUFDWixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDWCxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2lCQUN0RCxLQUFLLENBQUMsbUJBQVUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7aUJBQzFDLE9BQU8sRUFBRTtTQUNqQixDQUFDO2FBQ0csSUFBSSxDQUFDLFVBQUMsT0FBNkI7WUFDaEMsSUFBTSxJQUFJLEdBQUc7Z0JBQ1QsT0FBTyxTQUFBO2dCQUNQLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixVQUFVLEVBQUM7b0JBQ1AsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLG1CQUFVLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO29CQUNoRSxPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDSixDQUFBO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE2QjtZQUNuQyxNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==