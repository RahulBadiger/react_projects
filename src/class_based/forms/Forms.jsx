import React, { Component } from 'react'

export default class Forms extends Component {
  
  render() {
    return (
      <>
      <form action="">
      <input type="text" name="" id="username" />
      <label htmlFor="username">username</label>  <br /><br />
      <input type="text" name="" id="password" /> 
      <label htmlFor="password">password</label>
      <br /><br />
      <button onClick={(e)=>{
        e.preventDefault()
        let username=document.getElementById('username').value
        let password=document.getElementById('password').value
        console.log({username,password});
      }}>submit</button>
      </form>
      </>
    )
  }
}
