import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Cart = (props) => {
    // console.log(props);
   if(props.arr.length<=0){
    toast.error( "Please Add Some item First",{position:"top-center"})
   }
    console.log(props.arr);
    const [arr, setarr] = useState([]);
    let sum = 0

    for( let val of props.arr){
      sum=sum+val.price

    }
    // console.log(sum);
    

    function handleDelete(obj,i){

      console.log(obj);
      let copyArr =[...props.arr]
      copyArr.splice(i,1)
      props.setarr(copyArr)
       }


       function handleIncrement(obj,i){
        // console.log(obj);
        // console.log(i)


        let copyObj ={
          ...obj,
          quantity:obj.quantity+1,
          price:obj.price + ( obj.price/obj.quantity.toFixed(2))

         
        }

        let copyArr= [...props.arr];
        copyArr[i]=copyObj
        props.setarr(copyArr)
        }

       function handleDecrement(obj,i){

        // console.log(obj);
        // console.log(i)
        
        if ( obj.quantity<=1){
          handleDelete(obj,i)
          return
        }

        let copyObj ={
          ...obj,
          quantity:obj.quantity-1,
          price:obj.price - ( obj.price/obj.quantity)

         
        }

        let copyArr= [...props.arr];
        copyArr[i]=copyObj
        props.setarr(copyArr)
        }
      
    
  return (
    <div>
    { props.arr.length>0 &&<table className=' mt-10 border-2 border-amber-500 w-[1000px] text-center m-auto'>
      <thead> 
        <tr className=' border-2 border-amber-500 border-b '>
          <th className=' p-2'>Sno</th>
          <th>Product</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {
        props.arr.map((ele,i)=>{
          return <tr className=' border-2 border-amber-500'>
          <td className='p-2'>{i+1}</td>
            <td> <img src={ele.thumbnail} className=' w-32 m-auto' alt="" /></td>
            <td>{ele.title}</td>
            <td>${ele.price}</td>
            <td>
                <button onClick={ ()=> handleIncrement(ele,i)} className='  bg-green-500 p-1 border rounded mr-2 w-8 text-xl'> + </button>
                {ele.quantity}
                <button onClick={ ()=> handleDecrement(ele,i)} className=' bg-green-500 p-1 border rounded ml-2 w-8 text-xl'>-</button>

            </td>
            <td> <button  className=' text-[30px]' onClick={()=> handleDelete(ele,i)}> <MdDelete /></button></td>
      
          
          
          </tr>
        })
      }
    </tbody>
    </table>}
       { props.arr.length>0&& <h1  className='text-center py-2 font-bold text-xl border-2 border-amber-500 w-[1000px] m-auto'>Total = ${sum.toFixed(2)}</h1>}

       {

        props.arr.length<=0&& <h1 className='text-center my-[200px] text-5xl '> <span className=''>OOPS !!!!!</span> Your Cart is Empty </h1>
       
        
       }
      

      
        
      
    </div>
  )
}

export default Cart
