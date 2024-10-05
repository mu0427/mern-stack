const mongoose = require("mongoose")

const connectDB = async() =>{

    try{
        await mongoose.connect("mongodb+srv://masao:muromi2024@cluster0.wdz33.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MondoDB")
    }catch(err){
        console.log("Failure: Unconnected to MondoDB")
        throw new Error()
    }
}

module.exports = connectDB