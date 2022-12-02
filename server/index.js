import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app =express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/loginPageDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() =>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes

app.post("/login",(req, res)=>{
   res.send("My API")
})

app.post("/register",(req, res)=>{
    console.log(req.body)
})

app.listen(9002,() =>{
    console.log("BE started at port 9002")
})