// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Nav from "./function_based/Nav";

import "./global.css";
import "./dummy.css";
import Amazon from './assignments/amazon/Amazon';
import Myntra from './assignments/myntra/Myntra';
import Zomato from './assignments/zomato/Zomato';
import Phonepay from "./assignments/phonepay/Phonepay";
import Flip from './assignments/flip/Flip';



const App=()=> {
 return(
    <>
    {/* <Flip/> */}
    {/* <Phonepay/> */}
    {/* <Zomato/> */}
    {/* <Myntra/> */}
    <Amazon/> 
  {/* <Nav/> */}
   
  </>
 )
}

export default App;
