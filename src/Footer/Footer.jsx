import React from 'react'
import './footer.css'
export default function Footer() {
  return (
   <>
   <footer>
    <div className='container'>
<div className="row ">
    <div className="col-lg-4">
        <h4 className='text-uppercase fw-semibold'>LOCATION</h4>
        <p className='paref'>2215 John Daniel Drive Clark, MO 65243</p>
    </div>
    <div className="col-lg-4">
        <h4 className='text-uppercase fw-semibold'>AROUND THE WEB</h4>
       <div className='footerIcons  d-flex justify-content-center'>
       
                <a href="#"><i className="fa-brands fa-facebook-f"></i> </a>
                <a href="#"><i className="fa-brands fa-twitter"></i> </a>
                <a href="#"> <i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-solid fa-basketball"></i></a>
              
            
       </div>
    </div>
    <div className="col-lg-4">
        <h4 className='text-uppercase fw-semibold'>ABOUT FREELANCER</h4>
        <p className='paref'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
    </div>
</div>

    </div>
    
   </footer>
   <div className='copyright'>
    <p className='mb-0'>Copyright © Your Website 2021</p>

   </div>
   </>
  )
}
