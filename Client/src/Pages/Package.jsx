import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Package() {

  const [packages,setPackages] = useState([]);

useEffect(()=>{
  const fetchPackages = async()=>{
    try{
      const response = await axios.get('http://localhost:5000/api/packages');
      setPackages(response.data);
    }catch(error)
    {
      console.log('Error Fetching packages',error)
    }
  }
  fetchPackages();
},[])

function formatDate(isoDate) {
  const date = new Date(isoDate); 
  let value =  date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  value = value +', '
  return value;
}


  return (
    <div className="bg-black h-screen">
  <ul className="flex flex-col justify-center items-center min-h-screen space-y-6">
    {packages.map((pkg) => (
      <li
        key={pkg._id}
        className="bg-[#3366FF] w-1/2 h-56 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] overflow-hidden rounded-lg"
      >
        <div className="flex justify-between items-start h-40 p-4">
          
          <div className="flex flex-col text-lg font-extrabold text-white w-3/5 overflow-hidden">
            <h1 className="truncate">{pkg.title}</h1>
            <p className="mt-2 text-sm whitespace-normal break-words line-clamp-2">
              {pkg.description}
            </p>
            <p className="mt-2 text-sm"><span>Available Dates :</span> {pkg.availableDates.map((date)=>(formatDate(date)))}</p>
            <p className="mt-2 text-sm font-bold">Price : ₹{pkg.price}</p>
          </div>

         
          <div className="w-2/5 flex justify-end">
            <img src={pkg.image} alt="img1" className="h-32 w-48 object-cover rounded-lg" />
          </div>
        </div>

        
        <div className="flex justify-center">
          <Link to={`/booking/:${pkg._id}`}>
          <button className="bg-lime-400 px-6 py-1 text-xl font-bold shadow-[6px_6px_0px_0px_rgb(0,0,0,1)]">
            Book
          </button>
          </Link>
        </div>
      </li>
    ))}
  </ul>
</div>

  )
}

export default Package
