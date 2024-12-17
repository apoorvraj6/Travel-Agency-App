const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    numberOfTravelers:{
        type:Number,
        required:true
    },
    specialRequest:{
        type:String,
        default:""
    },
    packageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Package',
        required:true
    },
    totalPrice:{
        type:Number,
        required:true,
    }

},{
    timestamps:true
})

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = Booking;