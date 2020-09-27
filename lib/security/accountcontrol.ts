import {config} from "../../config/mongodb.config"
import {digest} from "./hash"
import passport from "passport"
import {Strategy} from "passport-local"
import MongoClient from "mongodb"
import * as type from "../database/collection_type"


//クライアント側にデータ(SID)を返す時に呼ばれる
//ログイン時に呼ばれる
//emailをcookieのSIDに埋め込んで返す
passport.serializeUser((email:string,done)=>{
    done(null,email)
})

//クライアントからデータ(SIDの復元)を貰うときに呼ばれる
//SIDから復元できなかった場合は呼ばれない
//画面遷移する度に呼ばれる
//done(null, user)を実行したらreq.userにパラメータが格納される
passport.deserializeUser((email,done)=>{
    MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
        const db = client.db(config.DATABASE)
        db.collection("users")
        .findOne({email: email })
        .then((user: type.UsersSession) => {
            return new Promise<type.UsersSession>((resolve, reject) => {
                db.collection("privileges")
                  .findOne({role: user.role})
                  .then((privilege: type.Privileges) =>{
                      user.permissions = privilege.permissions//ユーザが持っているロールに対して権限を付与する
                      resolve(user)
                  }).catch((error:MongoClient.MongoError) => {
                      reject(error)
                  })
                })
            })
        .then((user:type.UsersSession)=>{
            done(null, user) //req.userにパラメータが格納される
        }).catch((error: MongoClient.MongoError)=>{
            done(error)
        }).then(()=>{
            client.close()
        })
    })
})

//初回ろぐいん時に呼ばれる
passport.use("local-strategy",
new Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
    }, (req, username, password, done) => {
        MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
                const db = client.db(config.DATABASE)
                db.collection("users").findOne({
                    email: username,
                    password: digest(password)
                }).then((user:type.Users)=>{
                    if(user){
                        req.session?.regenerate((error)=>{
                            done(null,user.email)
                        })
                    }else{
                        done(null, false, req.flash("message", "ユーザー名 または パスワードが違います"))
                    }
                }).catch((error)=>{
                    done(error)
                }).then(()=>{
                    client.close()
                })
                
            }
        )
    }   
)
)

export const initialize = function () {
    return [
        passport.initialize(),
        passport.session(),
        function (req:any, res:any, next:any) {
            if(req.user) {
                res.locals.user = req.user //ejsにデータを設定可能
            }
            next()
        }
    ]
}

export const authenticate = function() {
    return passport.authenticate(
        "local-strategy", {
            successRedirect: "/account/",
            failureRedirect: "/account/login"
        }
    )
}

export const authorize = function(privilege:string){
    return function(req:any,res:any,next:any){
        if(req.isAuthenticated() && 
        (req.user.permissions || []).indexOf(privilege) >= 0) {
            
            next()
        } else {
            res.redirect("/account/login")
        }
        }
}