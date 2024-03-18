import React from 'react'
import { Bars } from 'react-loader-spinner'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from 'react-query';
import axios from 'axios';
export default function CategorySlide() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
      };


    async function getAllCategory() {
      return await  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
     }
      const{data,isLoding}   = useQuery("categorys", getAllCategory )

    if (isLoding==true) {
    return<Bars
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
      />
     }
     return (
     <>
 <Slider {...settings}>
    {data?.data.data.map(function(element , idx){return <div key={idx}>
    <img style={{width:'100%', height: '400px'}} 
     className='w-100' src={element.image} alt="" />
     <h6 className='my-3 '>{element.name}</h6> 
     </div>
     })}
      </Slider>
     </>
      )
      }


