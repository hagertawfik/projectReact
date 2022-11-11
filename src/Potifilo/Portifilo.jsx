import React from 'react'
import cabin from './cabin.png'
import cake from './cake.png'
import circus from './circus.png'
import game from './game.png'
import safe from './safe.png'
import submarine from './submarine.png'
import './potifilio.css'
export default function Portifilo() {
  return (
    <>
      <section id='Potifilio'>
        <div className="container">
            <div className='Potifilio-header text-center'>
                <h2>PORTFOLIO</h2>
                <div className='icons-div mt-4 mb-5 d-flex justify-content-center align-items-center'>
                <div className='icon-div'></div>
<i className='fa-solid fa-star fa-2x mx-3'></i>
<div className='icon-div'></div>
            </div>
            </div>

       <div className='mainItems'>
        <div className='row g-5'>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={cabin} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={cake} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={circus} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={game} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={safe} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-lg-4 '>
                <div className='main-item position-relative overflow-hidden'>
                    <img className='img-fluid rounded-3' src={submarine} alt="" />
                    <div className='mainItem-layer rounded-3  position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center '>
                    <i className="fa-solid fa-plus  text-white "></i>
                    </div>
                </div>
            </div>
        
        </div>
        </div>     
        </div>

      </section>
      <div className='popap-layer'>
        <div className=' container'>
      <div className=' popap p-5  bg-white rounded-4  text-center '>
        <div className='row d-flex justify-content-center'>
            <div className='col-lg-8'>
            <h2>LOG CABIN</h2>
                <div className='icons-div mt-4 mb-5 d-flex justify-content-center align-items-center'>
                <div className='icon-div'></div>
<i className='fa-solid fa-star fa-2x mx-3'></i>
<div className='icon-div'></div>
            </div>
            <img className='img-fluid  mb-5' src={cabin} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum corrupti qui nesciunt reiciendis veritatis. Autem architecto sunt mollitia, delectus nisi qui eius deleniti accusantium quidem rem velit tempore sapiente.</p>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum corrupti qui nesciunt reiciendis veritatis. Autem architecto sunt mollitia, delectus nisi qui eius deleniti accusantium quidem rem velit tempore sapiente.</p>
          </div>

        </div>
           
          
            </div>
            </div>
</div>

    </>
  )
}
