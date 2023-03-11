
import React from "react";
// import Nav from "./function_based/Nav";

import "./global.css";
// import "./dummy.css";
import Amazon from './assignments/amazon/Amazon';
import List from "./List";
import JSON from "./data.json"
import Course from "./function_based/Course";
// import Myntra from './assignments/myntra/Myntra';
// import Zomato from './assignments/zomato/Zomato';
// import Phonepay from "./assignments/phonepay/Phonepay";
// import Flip from './assignments/flip/Flip';
// import Net from './assignments/net/Net';
// import Naver from './props/Naver';


const App=()=> {
 return(
    <>
    <Course
    coursedetails={{
      coursename:"Java full stack",
      courseavail:true,
      coursedura:" 6 months"
    }}
    />
    {/* <List payload={JSON}/> */}
    {/* <Naver/> */}
    {/* <Net/> */}
    {/* <Flip/> */}
    {/* <Phonepay/> */}
    {/* <Zomato/> */}
    {/* <Myntra/> */}
    {/* <Amazon/>  */}
  {/* <Nav/> */}
   
  </>
 )
}

export default App;
