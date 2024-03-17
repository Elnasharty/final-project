import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <div className="div vh-100">
    <div className="container d-flex justify-content-center text-center ">

      <div className="row justify-content-center ">
      <h1 className='mt-5 fw-bolder'> CONATCT SECTION</h1>
      <div className=" d-flex justify-content-center mx-2 my-1 align-items-center">
          <div className={`${style.size} `}></div>
          <i class="fa-solid fa-star fs-5 px-3"></i>
          <div className={`${style.size} `}></div>
         </div>
    <form className='text-start w-75'>
      <label htmlFor="" className={`mt-5 ${style.LableColor}`}>userName:</label>
      <input className='w-100 btn border-bottom text-start' placeholder='userName'></input>
      <label htmlFor="" className={`mt-5 ${style.LableColor}`}>userAge:</label>
      <input className='w-100 btn border-bottom text-start' placeholder='userAge'></input>
      <label htmlFor="" className={`mt-5 ${style.LableColor}`}>userEmail:</label>
      <input className='w-100 btn border-bottom text-start' placeholder='userEmail'></input>
      <label htmlFor="" className={`mt-5 ${style.LableColor}`}>userPassword:</label>
      <input className='w-100 btn border-bottom text-start' placeholder='userPassword'></input>
      <button className=' btn btn-success mt-3 p-2'>Send Massage</button>
    </form>
      </div>
    </div>
    </div>
  )
}
