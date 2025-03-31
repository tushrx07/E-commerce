import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Items from '../components/Item';



const Home = (props) => {
  // console.log(props);
  

  const [arr, setarr] = useState([]);
  // console.log(arr);


let ansArr=[]
  for (let val of arr){
    if( val.category==='smartphones'){
      ansArr.push(val)
    }

    }
    // console.log(ansArr);

    let filterArr = arr.filter((ele,i)=>ele.category==='smartphones')
    
  async  function getAlldata(){
        let res = await fetch('https://dummyjson.com/products?limit=0')
        let data = await res.json()
        console.log(data);
        // console.log(data.products);
        
        setarr(data.products)
        
        }
           useEffect(()=>{
             getAlldata()
            },[])

            function handleCart(ans ,index){
          
              props.recieveFromChild(ans)
             

            }


  return (
    <div>
    <div className='bg-black'>
   <Items filterArr={filterArr} />
    </div>
     
   
     <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl ">
  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Products</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
    {
        arr.map((ele,i)=>{
            return  <div key={ele.id} className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
            <div className="w-full">
            <img src={ ele.thumbnail} alt="Product 1" className="w-full object-cover object-top aspect-[230/307]" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1">
                <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">{ ele.title}</h5>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                  <h6 className="text-sm sm:text-base font-bold text-gray-800">${ ele.price}</h6>
                  <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                    </svg>
                  </div>
                </div>
              </div>
              <button onClick={()=> handleCart(ele,i)} type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>

              <Link to={"/view"} state={ele} type="button" className=" py-1 text-center px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">View Details</Link>

            </div>
          </div>

        })
    }
   
    
   
  </div>
</div>

     
    </div>
  )
}

export default Home
