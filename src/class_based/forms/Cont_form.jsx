import React, { Component } from 'react'

export default class Cont_form extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
    }
  render() {
    return (
     <>
     <div>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="username">username</label> <br />
            <input type="text" name="" id="username" onChange={(e)=>{
                this.setState({username:e.target.value})
            }} />  <br />
            <label htmlFor="passsword">password</label> <br />
            <input type="text" name="" id="password" onChange={(e)=>{
                this.setState({password:e.target.value})
            }} />  <br /> <br />
            <button>Submit</button>

        </form>
     </div>
     </>
    )
  }
}
