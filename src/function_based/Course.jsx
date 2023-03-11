import React from 'react'

const Course = (props) => {
 if(props.coursedetails.courseavail==true){
    return(
        <>
        <h1>{props.coursedetails.coursename}</h1>
        <h1>{props.coursedetails.coursedura}</h1>
        <button style={{backgroundColor:"green",color:"white",boxShadow:"5px 5px 5px black",borderRadius:"50%",padding:"10px"}}>Available</button>
        </>
    
    )
 }
    else{
        return(
            <button style={{backgroundColor:"red",color:"white",boxShadow:"4px 4px  black"}}>Available</button>
        )
    }
 }



export default Course