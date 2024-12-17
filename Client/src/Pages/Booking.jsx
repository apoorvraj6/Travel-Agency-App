import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {jsPDF} from 'jspdf';

function Booking() {
    const { id } = useParams(); 
    const navigate = useNavigate();

    
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        phoneNumber: '',
        numberOfTravelers: 1,
        specialRequest: '',
        packageId: id.substr(1,id.length), 
    });


    const [packagePrice, setPackagePrice] = useState(0); 
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const response = await axios.get(`https://travel-agency-app.onrender.com/api/packages/${id.substr(1,id.length)}`);
                const price = response.data.price; 
                console.log(price);
                setPackagePrice(price); 
                setTotalPrice(price * formData.numberOfTravelers); 
            } catch (error) {
                console.error('Error fetching package details:', error);
            }
        };

        fetchPackageDetails();
    }, [id, formData.numberOfTravelers]);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
           
            const response = await axios.post('http://localhost:5000/api/bookings', formData);

            generateReceipt(formData, totalPrice);
            alert('Booking created successfully!');
            

            
            navigate('/');
        } catch (error) {
            console.error('Error submitting booking:', error.response?.data || error.message);
            alert('Failed to create booking. Please try again.');
        }
    };

    const generateReceipt = (formData, totalPrice) => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text('Booking Receipt', 20, 20);
        doc.setFontSize(12);
        doc.text(`Name: ${formData.name}`, 20, 30);
        doc.text(`Email: ${formData.email}`, 20, 40);
        doc.text(`Phone Number: ${formData.phoneNumber}`, 20, 50);
        doc.text(`Number of Travelers: ${formData.numberOfTravelers}`, 20, 60);
        doc.text(`Special Requests: ${formData.specialRequest || 'None'}`, 20, 70);
        doc.text(`Package ID: ${formData.packageId}`, 20, 80);
        doc.text(`Total Price: ${totalPrice}`, 20, 90);

       
        doc.save('booking-receipt.pdf');
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-[#1f1f1f] text-white rounded-lg px-12 py-10 shadow-lg w-full max-w-[500px] border-2 border-lime-400"
            >
                <h1 className="text-[40px] font-extrabold text-center mb-8 text-[#3366FF]">
                    Book Your Package
                </h1>

                
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-bold">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                        required
                    />
                </div>

                
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                        required
                    />
                </div>

                
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-bold">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                        required
                    />
                </div>

                
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-bold">Number of Travelers</label>
                    <input
                        type="number"
                        name="numberOfTravelers"
                        value={formData.numberOfTravelers}
                        onChange={handleChange}
                        min="1"
                        placeholder="Enter number of travelers"
                        className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                        required
                    />
                </div>

                
                <div className="mb-6">
                    <label className="block mb-2 text-lg font-bold">Special Requests (Optional)</label>
                    <textarea
                        name="specialRequest"
                        value={formData.specialRequest}
                        onChange={handleChange}
                        placeholder="Enter any special requests"
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                    ></textarea>
                </div>

               
                <button
                    type="submit"
                    className="bg-[#3366FF] text-white text-xl font-bold px-6 py-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:bg-[#2554CC] transition duration-300 w-full"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
}

export default Booking;
