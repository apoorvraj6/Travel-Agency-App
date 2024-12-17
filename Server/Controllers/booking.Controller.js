const Booking = require("../Models/booking")
const Package = require("../Models/package")

const createBooking = async(req , res)=>{
    const {name,email,phoneNumber,numberOfTravelers,specialRequest,packageId} = req.body;

    try{
        const packageDetails = await Package.findById(packageId);
        if(!packageDetails)
        {
            return res.status(404).json({message:"Package not found"});
        }

        const totalPrice = packageDetails.price * numberOfTravelers;

        const newBooking = new Booking({
            name,
            email,
            phoneNumber,
            numberOfTravelers,
            specialRequest,
            packageId,
            totalPrice
        });

        const savedBooking = await newBooking.save();
        res.status(201).json({savedBooking});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}


const getAllBookings = async(req,res) =>{
    try{
        const bookings = await Booking.find().populate('packageId','title price');
        res.status(200).json(bookings);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    createBooking,
    getAllBookings
}