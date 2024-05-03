import axios from "axios"
import { SELLER_API_URL } from "./constant"

export const dataValidate = (email,password,isSignIn)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPassValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password) 

    if(!isEmailValid) return "E-mail is not valid"
    if(!isPassValid) return "Password is not valid"

    return null
}