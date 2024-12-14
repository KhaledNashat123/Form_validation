import dotenv from "dotenv"
dotenv.config();

import express from "express"
import router from "./Router/router"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.set("views" , "Views")
app.set("view engine" , "ejs")

app.use(router)

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server is running");
})