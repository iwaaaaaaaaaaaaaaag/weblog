import {config} from "./config/app.config"
import {initialize} from "./lib/security/accountcontrol"
import express from "express"
import {router as indexRouter} from "./routes/index"
import {router as postsRouter} from "./routes/posts"
import {router as searchRouter} from "./routes/search"
import {router as accountRouter} from "./routes/account"
import {router as apiRouter} from "./api/posts"

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"
import {console as consoleLogger, application as applicationLogger} from "./lib/log/logger"
import {systemLoggerMiddleware} from "./lib/log/systemlogger"
import {accessLoggerMiddleware} from "./lib/log/accesslogger"
import flash from "connect-flash"

const app = express()
app.set("view engine", "ejs")
app.disable("x-powered-by")

//静的ファイルを返す
app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")))

//アクセスログを設定する
app.use(accessLoggerMiddleware())

app.use(cookieParser())
app.use(session({
    secret: config.security.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    name: "sid"
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(flash())
app.use(...initialize())

//routerを設定
app.use("/api", (_=> {
    const router = express.Router()
    router.use("/posts/", apiRouter )
    return router
})())

app.use("/", (_=> {
    const router = express.Router()
    router.use((req, res, next) => {
        res.setHeader("X-Frame-Option", "SAMEORIGIN")
        next()
    })
    router.use("/posts/", postsRouter )
    router.use("/search/", searchRouter )
    router.use("/account/", accountRouter )
    router.use("/", indexRouter )
    return router    
})()) 

//システムログを設定する
app.use(systemLoggerMiddleware())

applicationLogger.addContext("key","test")
applicationLogger.error("message")

//パスがヒットしなかったらここが呼ばれる
app.use((req, res, next) => {
    const data = {
        method: req.method,
        protocol: req.protocol,
        version: req.httpVersion,
        url: req.url
    }
    res.status(404)
    if(req.xhr){
       res.json(data)
    }
    else{
       res.render("./404.ejs", {data})
    }
})

//最後の例外処理
app.use((err:Error, req:express.Request, res:express.Response, next:express.NextFunction) => {
    const data = {
        method: req.method,
        protocol: req.protocol,
        version: req.httpVersion,
        url: req.url,
        error: (process.env.NODE_ENV === "development") ? {
            name: err.name,
            message: err.message,
            stack: err.stack
        } : undefined
    }
    res.status(500)
    if(req.xhr){
        res.json(data)
    }else{
        res.render("./500.ejs", { data })
    }

})

app.listen(3000)
