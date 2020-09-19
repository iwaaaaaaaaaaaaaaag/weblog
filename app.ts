import express from "express"
import {router as indexRouter} from "./routes/index"
import {router as postsRouter} from "./routes/posts"
import {router as searchRouter} from "./routes/search"
const app = express()
import {console as consoleLogger, application as applicationLogger} from "./lib/log/logger"
import {systemLoggerMiddleware} from "./lib/log/systemlogger"
import {accessLoggerMiddleware} from "./lib/log/accesslogger"


app.set("view engine", "ejs")
app.disable("x-powered-by")

//静的ファイルを返す
app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")))

//アクセスログを設定する
app.use(accessLoggerMiddleware())

//routerを設定
app.use("/", indexRouter )
app.use("/posts/", postsRouter )
app.use("/search/", searchRouter )


//システムログを設定する
app.use(systemLoggerMiddleware())

applicationLogger.addContext("key","test")
applicationLogger.error("message")
app.listen(3000)
