import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = (props) => {
  // console.log(props.arr.length);
  
  return (
    <div>
        <nav className=' z-50 sticky top-0 left-0 right-0 bg-blue-900 text-white flex justify-between items-center px-20 h-[60px]'>
            <Link className=' hover:text-red-600' to={'/'}> E-Mart </Link>
            <ul className='flex gap-9 items-center'>
              <li className=' hover:text-red-600'><Link to ="/"> Home</Link> </li>
              <li className=' hover:text-red-600'><Link to ="/xyz"> About</Link> </li>
              <li className='flex my-10 '><Link className=' hover:text-red-600' to ="/cart"> <AiOutlineShoppingCart size={20}/></Link> 
              <sup className=''>{props.arr.length>0 ? props.arr.length  : ''}</sup> </li>
              
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
