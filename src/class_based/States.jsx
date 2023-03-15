import React from "react"
import { Component } from "react"

class States extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         un:"rahul",
    //     }
    // }
    state={
        un:"Rahul",
        skills:["html","css","js"]
    }
    render(){
        return(
            <>
            <h1><ul>
            {this.state.skills.map((a)=>{
                return <li>{a}</li>
            })}
                </ul></h1>
            </>
        )
    }
}

export default States