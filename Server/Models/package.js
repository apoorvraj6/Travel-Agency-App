const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        requied:true,
    },
    availableDates:{
        type:[Date],
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},{
    timestamps:true,
});

const Package = mongoose.model('Package',packageSchema)

module.exports = Package;
