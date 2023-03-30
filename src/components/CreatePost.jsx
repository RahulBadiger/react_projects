import React,{useState} from 'react'
import axiosinstance from './helpers/axios'


const CreatePost = () => {
  let [coursename,setCoursename]=useState("")
  let[authorname,setAuthorname]=useState("")
  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let payload={
        coursename,
        authorname
      }
      let data=await axiosinstance.post("/posts",payload)
    }
    catch{
      console.log("unable to connect");
    }

  }
  return (

    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="Coursename">Coursename</label>
      <input type="text" id='Coursename' onChange={(e)=>{
        setCoursename(e.target.value)
      }}/> <br /><br />
      <label htmlFor="Authorname">Authorname</label>
      <input type="text" id='Authorname' onChange={(e)=>{
        setAuthorname(e.target.value)

      }}/> <br /><br />
      <button>Submit</button>
    </form>
  )
}

export default CreatePost