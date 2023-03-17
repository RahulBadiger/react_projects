import React from "react";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const Hooks=()=>{
  let[count,setCount]=useState(0)
  // let handleIncrement=()=>{
  //   setCount(count+1)
  
  // }
  // let handleDecrement=()=>{
  //   setCount(count-1)
  // }
  // let handleReset=()=>{
  //   setCount(0)
  // }
  let[img,setImg]=useState(faker.image.avatar())
  let[name,setName]=useState(faker.internet.userName())
  let[mail,setMail]=useState(faker.internet.email())
  let[number,setNumber]=useState(	faker.phone.phoneNumber())

  let handleChange=()=>{
    setImg(faker.image.avatar())
    setName(faker.internet.userName())
    setMail(faker.internet.email())
    setNumber(	faker.phone.phoneNumber())
  }

  



  return(
    <div>
      {/* <h1>
        {count}
      </h1>
      <div>
        <button onClick={handleIncrement}>+ Increment</button>
        <button onClick={handleDecrement}>- Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div> */}
      <h2 style={{fontFamily:"cursive"}}>
        Name={name} <br />
        Email={mail} <br />
        Number={number}
      </h2>
      <img src={img} alt="" style={{marginLeft:"650px",marginTop:"50px",height:"200px",borderRadius:"30px",boxShadow:"4px 4px 4px black"}}/ > <br /><br /><br />
      <button onClick={handleChange} style={{marginTop:"10px",marginLeft:"680px",borderRadius:"50px",fontSize:"20px",backgroundColor:"orange",boxShadow:"4px 4px 4px black"}}>Change Details</button>
      {/* <button onClick={handleName} style={{marginTop:"10px",marginLeft:"680px",borderRadius:"50px",fontSize:"20px",backgroundColor:"yellow",boxShadow:"4px 4px 4px green"}}>change name</button> */}
    </div>


  )
}
export default Hooks