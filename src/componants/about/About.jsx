import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <div className={`${style.Aboutbg}`}>
    <div className="container d-flex vh-100  text-white justify-content-center text-center align-items-center">
      <div className="row ">
         <h1 className='fw-bolder '>ABOUT COMPONENT</h1>
         <div className=" d-flex div justify-content-center align-items-center mx-2 my-1">
          <div className={`${style.size} `}></div>
          <i class="fa-solid fa-star fs-5 px-3"></i>
          <div className={`${style.size} `}></div>
         </div>
         
        <div className="col-md-6 text-start">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 text-start">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        
      </div>
    </div>
    </div>
  )
}
