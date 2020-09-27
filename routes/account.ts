import Router from "express"
import {authenticate, authorize} from "../lib/security/accountcontrol"
import {Posts} from "../lib/database/collection_type"
import {config} from "../config/mongodb.config"
import MongoClient from "mongodb"
import Tokens from "csrf"
const tokens = new Tokens()

export const router = Router()

function createRegistData ( body:Posts ) {
    const datetime = new Date()
    return {
        url: body.url,
        published: datetime,
        update: datetime,
        title: body.title,
        content: body.content,
        keywords: (body.keywords || "").split(","),
        authors: (body.authors || "").split(","),
    }
} 

function validateRegistData (body:Posts) {
    let isValidated = true
    let errors = {
        url:"",
        title:""
    }

    if(!body.url) {
        isValidated = false
        errors.url = "URLが未入力です。'/'から始まるURLを入力してください。"
    }

    if(body.url && /^\//.test(body.url) === false ) {
        isValidated = false
        errors.url = "'/'から始まるURLを入力してください。"
    }

    if(!body.title) {
        isValidated = false
        errors.title = "タイトルが未入力です。任意のタイトルを入力してください。"
    }


    return isValidated ? undefined : errors

}

router.get("/", authorize("readWrite") , (req, res, next) => {
    if(req.isAuthenticated()) {
        next()
    } else {
        res.redirect("./account/login")
    }
}, (req, res) => {
    res.render("./account/index.ejs")
})

router.get("/login", (req, res) => {
    res.render("./account/login.ejs", {message: req.flash("message")})
})

router.post("/login", authenticate())

router.post("/logout", (req, res) => {
    req.logout()
    res.redirect("/account/login")
})

router.get("/posts/regist", authorize("readWrite"), (req, res) => {
    tokens.secret((error, secret) => {
        //シークレット(サーバサイド)、クッキー(クライアントサイド)を作成
        const token = tokens.create(secret)
        req.session!._csrf = secret
        res.cookie("_csrf", token)

        res.render("./account/posts/regist-form.ejs")

    })
})

router.post("/posts/regist/input", authorize("readWrite"),(req, res) => {
    const original = createRegistData(req.body)
    res.render("./account/posts/regist-form.ejs", { original })
})

router.post("/posts/regist/confirm", authorize("readWrite"), (req, res) => {
    const original = createRegistData(req.body)
    const errors = validateRegistData(req.body)
    if(errors){
        res.render("./account/posts/regist-form.ejs", { errors ,original })
        return
    }
    res.render("./account/posts/regist-confirm.ejs", {original})
})

router.post("/posts/regist/execute", authorize("readWrite"), (req, res) => {
    const secret = req.session!._csrf
    const token = req.cookies._csrf

    if(tokens.verify(secret, token) === false ){
        throw new Error("Invalid Token.")
    }

    const original = createRegistData(req.body)
    const errors = validateRegistData(req.body)

    if(errors){
        res.render("./account/posts/regist-form.ejs", { errors ,original })
        return
    }

    MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
        const db = client.db(config.DATABASE)
        db.collection("posts")
        .insertOne(original)
        .then(() => {
            //シークレット(サーバサイド)、クッキー(クライアントサイド)を削除
            delete req.session!._csrf
            res.clearCookie("_csrf")
            res.redirect("/account/posts/regist/complete")
        }).catch((error:MongoClient.MongoError) => {
            throw error
        }).then(()=>{
            client.close()
        })
    })

})

router.get("/posts/regist/complete", (req, res) => {
    res.render("./account/posts/regist-complete.ejs")
})