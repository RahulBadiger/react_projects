import React from 'react'
import { useRef } from 'react'

const Forms = () => {
    let userRef=useRef()
    let passRef=useRef()
    let handChange=(e)=>{
        e.preventDefault()
        let username=userRef.current.value
        let password=passRef.current.value
        console.log({username,password});

    }

    
  return (
    <>
   <div>
   <form action="" onSubmit={handChange}>
    <label htmlFor="username">username</label>
    <input type="text"  name=""  ref={userRef} id="username" />  <br /><br />
    <label htmlFor="password">password</label>
    <input type="text"   name="" ref={passRef} id="password" /> <br /><br />
    <button>Submit</button>
    </form>
   </div>
    
    </>
  )
}

export default Forms