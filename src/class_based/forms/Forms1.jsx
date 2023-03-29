import React, { Component } from 'react'
import { createRef } from 'react'

export default class Forms1 extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        let a="rahul"
        let b=1234
        if(a==username && b==password){
          alert("correct")
        }
        else{
          alert("invalid")
        }
        console.log({username,password});
    }
  render() {
    return (
      <>
      <div>
        <form action="" onSubmit={this.handleSubmit} >
        <input type="text" name="" id="username" ref={this.userRef} />
        <label htmlFor="username" >username</label>    <br /><br />
        <input type="text" name="" id="password" ref={this.passRef} />
        <label htmlFor="password" >password</label>    <br /><br />
        <button >submit</button>
        </form>

      </div>
      </>
    )
  }
}
