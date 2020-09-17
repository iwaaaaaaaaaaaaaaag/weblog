import express from "express"
import {router as indexRouter} from "./routes/index"
const app = express()
import {console as consoleLogge} from "./lib/log/logger"
import {systemLogger} from "./lib/log/systemlogger"

app.set("view engine", "ejs")
app.disable("x-powered-by")

app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")))

app.use("/", indexRouter )

//全パスに対しsystemLoggerを実行する
app.use(systemLogger())

app.listen(3000)
