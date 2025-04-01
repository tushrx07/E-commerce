import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import PNF from "./pages/PNF"
import Navbar from "./components/Navbar"
import Viewdetails from "./pages/Viewdetails"
import Cart from "./pages/Cart"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;


function App() {
const [arr, setarr] = useState([]);

console.log(arr);


  function recieveFromChild(ans)
  {
    // console.log(ans);
    ans.quantity=1

   let copyArr=[...arr]
   
   let find = arr.find((ele)=> ele.id===ans.id)
   if(find){
    return toast.warning("Item already Added",{position:"top-center"})

   }
   else{

     copyArr.push(ans)
     toast.success( " item Added successfully",{position:"top-center"})
     setarr(copyArr)

   }


  }
 return (
    <>
 

   <BrowserRouter>
   
   <div className=" h-[70px]">
   <Navbar arr={arr}/>
   </div>

  

<Routes> 
  <Route path="/" element={ <Home recieveFromChild={recieveFromChild}/>}/>
  <Route path="/xyz" element={ <About/>}/>

 <Route path="/view" element={ <Viewdetails/>}/>
 <Route path="/cart" element={ <Cart arr={arr} setarr={setarr}/>}/>

 <Route path="/*" element={ <PNF/>}/>
</Routes>
   
   <ToastContainer />
   </BrowserRouter>
    </>
  )
}

export default App
