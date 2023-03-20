import React ,{useState}from 'react'
import photo from "./car.jpg"
import { useRef } from 'react'

const Refs = () => {
    let[img,setImg]=useState(photo)
    let[loading,setLoading]=useState(true)
    let imgRef=useRef()
    let handleChange=()=>{
        if(loading){
            setLoading(!true)
        imgRef.current.style.borderRadius="25% "
        imgRef.current.style.border="solid 4px red"
        
        }
        else{
            {
                setLoading(!false)
                imgRef.current.style.borderRadius="0% "
                imgRef.current.style.border="none"
                
                }
        }
    }
  return (
    <>
    <img src={img} alt="" ref={imgRef}  /> <br /><br />
    <button onClick={handleChange}>click</button>
    </>
  )
}

export default Refs