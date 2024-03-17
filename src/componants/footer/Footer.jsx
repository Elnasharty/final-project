import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <div>
    <div className={`foorter text-white text-center ${style.Bgcolor} ` }>
        <div className="container ">
            <div className="row justify-content-between p-5">
            <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <i class="fa-brands fa-facebook border border-1 border-light p-2 rounded-5 m-1"></i>
            <i class="fa-brands fa-twitter border border-1 border-light p-2 rounded-5 m-1"></i>
            <i class="fa-brands fa-linkedin-in border border-1 border-light p-2 rounded-5 m-1"></i>
            <i class="fa-solid fa-globe border border-1 border-light p-2 rounded-5 m-1"></i>
            <div className="div">

            </div>
            </div>
            <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            </div>
            
           
        </div>
        <div className={`foot text-white text-center ${style.footbg}`}>
                <p className='m-0 p-4'>Copyright © Your Website 2021</p>
            </div>
    </div>
    </div>

  )
}

