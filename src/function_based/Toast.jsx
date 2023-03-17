import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  let handleSubmit=()=>{
    toast.dark("successful",{
      position:"bottom-left"
      
    })
  }
  return (
    <div>
      <ToastContainer/>
      <button onClick={handleSubmit} style={{fontSize:"20px"}}>click</button>
    </div>
  )
}

export default Toast