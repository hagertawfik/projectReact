import React  from 'react'
import './contact.css'
export default function Contact() {
    // function EmptyInputName(){
    //     let name = document.getElementById("nameInput");
    //     if(name.value=="" ){ 
    //         return 0
    //     }
    //     else{
    //         return -1
    //     }
    // }
    // function EmptyInputmail(){
    //     let email = document.getElementById("mailInput");
    //     if(email.value==""  ){ 
    //         return 0
    //     }
    //     else{
    //         return -1
    //     }
    // }
    // function EmptyInputphone(){
    //     let phone = document.getElementById("phoneInput");       
    //     if(phone.value=="" ){ 
    //         return 0
    //     }
    //     else{
    //         return -1
    //     }
    // }
    // function EmptyInputmessage(){
    //     let messages = document.getElementById("messageInput");
    //     if(messages.value=="" ){ 
    //         return 0
    //     }
    //     else{
    //         return -1
    //     }
    // }
    // function vailidationName(){
    //     let name = document.getElementById("nameInput");
    //     let regex =/^[A-Z][a-zA-Z]+$/
    //     if(regex.test(name.value)==true){
    //         console.log("true");
    //         return true
    //     }
    //     else{
    //         console.log("false");
    //         return false
    //     }
       
    //   }
    // function validationEmail(){
    //     let email = document.getElementById("mailInput");
    //     let regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //     if(regex.test(email.value)==true){
    //         console.log("true");
    //         return true
    //     }
    //     else{
    //         console.log("false");
    //         return false
    //     }
       
    //   }
    // function validationPhone(){
    //     let phone = document.getElementById("phoneInput")
    //     let regex =/^[0-9\-\+]{9,15}$/
    //     if(regex.test(phone.value)==true){
    //         console.log("true");
    //         return true
    //     }
    //     else{
    //         console.log("false");
    //         return false
    //     }
       
    //   }
   
    //   function allvalidation(){
    //     // if(EmptyInputName() == 0){
    //     //   document.getElementById("par1").classList.add("d-block")
    //     //     return 0
    //     // }
    //     if(EmptyInputmail() == 0){
    //       document.getElementById("par2").classList.add("d-block")
    //         return 0
    //     }
    //     if(EmptyInputphone() == 0){
    //       document.getElementById("par3").classList.add("d-block")
    //         return 0
    //     }
    //     if(EmptyInputmessage() == 0){
    //       document.getElementById("par4").classList.add("d-block")
    //         return 0
    //     }
    // }
      
      
  return (
    <>
    <section id='Potifilio' className='contact'>
        <div className="container">
            <div className='Potifilio-header text-center'>
                <h2>CONTACT ME</h2>
                <div className='icons-div mt-4 mb-5 d-flex justify-content-center align-items-center'>
                <div className='icon-div'></div>
<i className='fa-solid fa-star fa-2x mx-3'></i>
<div className='icon-div'></div>
            </div>
            </div>

<div className='row'>
    <div className="col-lg-8 mx-auto">
        <form action="">
            <div className='formInput'>
            <label className='opacity-0'>Name</label>
            <input  id='nameInput' className='form-control border-0' placeholder='Name' type="text" />
           <p id='par1' className='text-danger'><ul> <li>Please enter your name.</li></ul></p>
            </div>
            <div className='formInput'>
            <label className='opacity-0'>Email Address</label>
            <input  id='mailInput' className='form-control border-0 'placeholder='Email Address' type="email"  />
           <p id='par2' className='text-danger'><ul> <li>Please enter your email address.</li></ul></p>
            </div>
            <div className='formInput'>
            <label className='opacity-0'>Phone Number</label>
            <input  id='phoneInput' className='form-control border-0 'placeholder='Phone Number' type="text" />
           <p id='par3' className='text-danger'><ul> <li>Please enter your phone number.</li></ul></p>
            </div>
            <div className='formInput'>
            <label className='opacity-0'>Message</label>
            <textarea id='messageInput' rows='5' className='form-control border-0 'placeholder='Message' type="text"></textarea>
            <p id='par4' className='text-danger'><ul> <li>Please enter a message.</li></ul></p>
            </div>
<div className='btn-submit'>
    <button  className=' btn1 btn-lg border-0 rounded-3' type='submit' id='submitInput'>Send</button>
</div>
        </form>
    </div>
</div>

            </div>
            </section>
            </>
  )
}
