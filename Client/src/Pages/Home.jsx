import arrow from '../assets/arrow.png'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='bg-black min-h-screen flex '>
            <div>
                <div className=' flex flex-col pt-24 px-28 gap-6 text-center'>
                    <h1 className='text-[50px] font-extrabold text-white '> Shaping the Future of </h1>
                    <div className='flex '>
                        <div className='relative w-fit bg-lime-400 px-7 rounded-lg -rotate-6 '>
                            <h1 className='text-[60px] font-extrabold text-black z-0'> Travel </h1>
                        </div>
                        <h1 className='text-[50px] font-extrabold text-white pl-6'> With</h1>
                    </div>


                    <h1 className='text-[50px] font-extrabold text-[#3366FF] '> Adventure <span className='text-white'>& Comfort</span> </h1>
                </div>

                <img src={arrow} alt="Arrow" className='ml-[350px] mt-5 ' />
                <Link to='/package'><button className='bg-[#3366FF] text-white rounded-xl text-2xl font-bold ml-48 -mt-10 px-8 py-4 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'>Packages</button></Link>


            </div>



            <div className='flex-1 h-screen'>

                <div className="relative w-fit h-1/3 mt-10 border-2">
                    <div className="absolute inset-2 bg-lime-400 rounded-lg -rotate-6 w-full h-full"></div>
                    <img src={img1} alt="Image1" className="relative z-10 rounded-lg h-full"/>
                </div>

                <div className="relative w-fit h-1/3 ml-44 border-2 -mt-10">
                    <div className="absolute inset-4 bg-lime-400 rounded-lg rotate-6 w-full h-full"></div>
                    <img src={img2} alt="Image1" className="relative z-10 rounded-lg h-full"/>
                </div>

                <div className="relative w-fit h-1/3  border-2 -ml-32 -mt-12">
                    <div className="absolute inset-3 bg-lime-400 rounded-lg -rotate-6 w-full h-full"></div>
                    <img src={img3} alt="Image1" className="relative z-10 rounded-lg h-full"/>
                </div>

            </div>

        </div>
    )
}

export default Home
