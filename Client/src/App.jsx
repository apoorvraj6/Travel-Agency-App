import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Package from "./Pages/Package"
import Booking from "./Pages/Booking"


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/package' element={<Package/>}></Route>
      <Route path='/booking/:id' element={<Booking/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
