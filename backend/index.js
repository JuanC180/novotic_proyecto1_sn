
// const express = require("express")
import express  from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"


const app = express()
const PORT = process.env.PORT || 4000

dotenv.config()
conectarDB()

console.log(process.env.MONGO_URI)

app.use("/", (req, res) =>{
    res.send("Hola mundo xxx")
})

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo por el puerto: ${PORT}`)
})