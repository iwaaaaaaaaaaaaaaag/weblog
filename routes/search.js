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
exports.router.get("/", function (req, res) {
    var keyword = req.query.keyword || "";
    var regexp = new RegExp(".*" + keyword + ".*");
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("posts").find({
            $or: [{ title: regexp }, { content: regexp }]
        }).sort({ published: -1 })
            .toArray()
            .then(function (list) {
            var data = {
                keyword: keyword,
                list: list
            };
            res.render("./search/list.ejs", data);
        }).catch(function (error) {
            throw error;
        }).then(function () {
            client.close();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDJEQUErQztBQUMvQyxvREFBNEI7QUFDNUIsb0RBQWlDO0FBRXBCLFFBQUEsTUFBTSxHQUFHLGlCQUFNLEVBQUUsQ0FBQTtBQUU5QixjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3JCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtJQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLE9BQU8sT0FBSSxDQUFDLENBQUE7SUFFM0MsaUJBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQU0sQ0FBQyxjQUFjLEVBQUUsdUJBQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNyRSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLHVCQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsR0FBRyxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3hCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxVQUFDLElBQTBCO1lBQ2pDLElBQU0sSUFBSSxHQUFHO2dCQUNULE9BQU8sU0FBQTtnQkFDUCxJQUFJLE1BQUE7YUFDUCxDQUFBO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE0QjtZQUNsQyxNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==