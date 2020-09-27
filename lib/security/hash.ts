import {config} from "../../config/app.config"
import crypto from "crypto"

export const digest = function (text:string) {
    text += config.security.PASSWORD_SALT

    for(let i = 0; i < config.security.PASSWORD_STRETCH; i++){
     const hash = crypto.createHash("sha256")
     hash.update(text)
     text = hash.digest("hex")
     console.log(text)
    }

    return text;
}

