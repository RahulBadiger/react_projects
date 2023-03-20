import React from 'react'
import VIDEO from "./kabzaa.mp4"
import { useState, useRef } from 'react';

const Ref1 = () => {
    let[vid,setVid]=useState(VIDEO)
    let[load,setLoad]=useState(true)
    let playorPause=useRef()
    let handChan=()=>{
        if(load==true){
            playorPause.current.play()
        setLoad(!true)
        }
        
        else{
            setLoad(!false)
            playorPause.current.pause()
        }
        
    }
  return (
    <>
    <video src={vid} height="450px" width="500px" onClick={handChan} ref={playorPause}></video>
    </>
  )
}

export default Ref1