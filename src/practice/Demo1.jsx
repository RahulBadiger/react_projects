import React, { Component } from 'react'
import { createRef } from 'react'

export default class Demo1 extends Component {
    constructor(){
        super()
        this.state={com:"jsp"}
        this.spanRef=createRef()
        this.btnref=createRef()
    }
  render() {
    return (
      <>
      <span ref={this.spanRef}>{this.state.com}</span> <br />
      <button ref={this.btnref}>change company</button>
      </>
    )
  }
}
