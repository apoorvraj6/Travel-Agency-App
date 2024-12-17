const mongoose = require("mongoose");

const connectdb = async()=>{
    try{
        mongoose.connect(
            "mongodb+srv://rajapoorv858:QtQBvMvqcKASO3Ib@cluster0.aoigm.mongodb.net/travel-booking?retryWrites=true&w=majority"
        )
        console.log("Connected to the database");
    }
    catch(error)
    {
        console.log(`Error connecting to the database :${error}`);
    }
}

module.exports = connectdb
