const mongoose = require("mongoose");


const DB = "mongodb+srv://db:Fog@57575601@cluster0.f1aceo4.mongodb.net/user?retryWrites=true&w=majority"

mongoose.connect(DB).then(() => {
    console.log("database connected");
}).catch((errr) => console.log("err"));