import React from 'react'
import { useState } from 'react';

const Refs = () => {
    // let iconRef=useRef()
    let[load,setLoad]=useState(true)
    let handChan=()=>{
        if(load==true){
            setLoad(!true)
        }
        else{
            setLoad(!false)
        }

    }

  return (
   <>
   <input type={load? "text":"password"}   style={{fontSize:"30px"}}/>
   {/* <button>Change</button> */}
   <span class="material-symbols-outlined" style={{marginLeft:"-40px"}}  onClick={handChan} >
visibility
</span>
<br /><br />
{/* <button onClick={handChan} style={{fontSize:"20px"}}>{load? "on":"off"}</button> */}
   </>
  )
}

export default Refs