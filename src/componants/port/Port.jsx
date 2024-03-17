import React from 'react'
import style from './Port.module.css'
import img0 from '../../assets/img/10001.png'
import img1 from '../../assets/img/10003.png'
import img2 from '../../assets/img/10002.png'

var imgs = [img0,img1,img2]
export default function Port() {
  return (
    <div className="div ">
    <div className="container d-flex justify-content-center text-center ">

      <div className="row justify-content-center ">
      <h1 className='mt-5 fw-bolder'>PORTFOLIO COMPONENT</h1>
      <div className=" d-flex justify-content-center mx-2 my-1 align-items-center">
          <div className={`${style.size} `}></div>
          <i class="fa-solid fa-star fs-5 px-3"></i>
          <div className={`${style.size} `}></div>
          </div>
          <div className="row ">

          <div className='col-md-4 p-3'>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img0} alt="house" className='w-100 over' />
            </div>
         </div>
        
         <div className='col-md-4 p-3'>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img1} alt="house" className='w-100 over' />
            </div>
         </div>
         <div className='col-md-4 p-3'>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img2} alt="house" className='w-100 over' />
            </div>
         </div>
         <div className='col-md-4 p-3'>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img0} alt="house" className='w-100 over' />
            </div>
         </div> 

         <div className='col-md-4 p-3'>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img1} alt="house" className='w-100 over' />
            </div>
         </div>

         <div className='col-md-4 p-3 '>
            <div className=" position-relative rounded-4 overflow-hidden ">
          <div className={`${style.layout} w-100 position-absolute h-100 d-flex justify-content-center align-items-center  ${style.Portbg}`}>
          <i class="fa-solid fa-plus fs-1 text-light"></i>
          </div>
              <img src={img2} alt="house" className='w-100 over' />
            </div>
         </div>
          </div>
         
         </div>
         </div>
         </div>
  )
}

