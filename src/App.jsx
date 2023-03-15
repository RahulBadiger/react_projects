import React, { Component } from 'react'

 class App extends Component {
  constructor (){
    super()
    this.state={
      count:0

    }
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
      <div style={{marginLeft:"500px",marginTop:"200px"}}>
        <h2 style={{marginLeft:"220px",fontSize:"50px",textShadow:"2px 2px "}}>{this.state.count}</h2>
        <div >
        <button onClick={this.handleIncrement} style={{boxShadow:"4px 4px ",fontSize:"30px",backgroundColor:"green"}}>+ Increment</button>
        <button onClick={this.handleDecrement} style={{boxShadow:"4px 4px",fontSize:"30px",backgroundColor:"yellow"}}>- Decrement</button>
        <button onClick={this.handleReset} style={{boxShadow:"4px 4px",fontSize:"30px",backgroundColor:"red"}}>Reset</button>
        </div>
      </div>
    )
  }
}
export default App
