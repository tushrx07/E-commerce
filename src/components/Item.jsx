import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



const Items = (props) => {
	console.log(props)
	console.log(props.filterArr)

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		className: "center",
   		centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
	  };
     
  return (
	<div>
	<Slider {...settings}>
     { props.filterArr.map((ele)=>{
		return <Link to={'/view'} state={ele} className='flex flex-col items-center'>
        <img className='m-auto ' src={ele.thumbnail} alt="" />
		<h1 className='text-gray-50 text-center'>{ele.title}</h1>
      </Link>
	 })}

      
    </Slider>
	  
	</div>
  )
}

export default Items