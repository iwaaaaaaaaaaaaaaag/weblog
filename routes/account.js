"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
exports.router = express_1.default();
function createRegistData(body) {
    var datetime = new Date();
    return {
        url: body.url,
        published: datetime,
        update: datetime,
        title: body.title,
        content: body.content,
        keywords: (body.keywords || "").split(","),
        authors: (body.authors || "").split(","),
    };
}
exports.router.get("/", function (req, res) {
    res.render("./account/index.ejs");
});
exports.router.get("/posts/regist", function (req, res) {
    res.render("./account/posts/regist-form.ejs");
});
exports.router.get("/posts/regist/input", function (req, res) {
    var original = createRegistData(req.body);
    res.render("./account/posts/regist-form.ejs", { original: original });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBR2YsUUFBQSxNQUFNLEdBQUcsaUJBQU0sRUFBRSxDQUFBO0FBRTlCLFNBQVMsZ0JBQWdCLENBQUcsSUFBVTtJQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQzNCLE9BQU87UUFDSCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDYixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3JCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7S0FDM0MsQ0FBQTtBQUNMLENBQUM7QUFFRCxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3JCLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3ZDLElBQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFBO0FBQy9ELENBQUMsQ0FBQyxDQUFBIn0=