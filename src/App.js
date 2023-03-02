// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Nav from "./function_based/Nav";
import Body from "./function_based/Body";
import Profile from "./function_based/Profile";
import Foot from "./function_based/Foot";
import Chat from "./function_based/Chat";
import Status from "./function_based/Status";
import Refresh from "./function_based/Refresh";
import Search from "./function_based/Search";
import Bookmark from "./function_based/Bookmark";
import Share from "./function_based/Share";
import Adder from "./class_based/Adder";
import Close from "./class_based/Close";
import Minimize from "./class_based/Minimize";
import Restore from "./class_based/Restore";
import Netflix from "./class_based/Netflix";
import Hotstar from "./class_based/Hotstar";
import Voot from "./class_based/Voot";
import Vivo from "./class_based/Vivo";
import Samsung from "./class_based/Samsung";
import Apple from "./class_based/Apple";

const App=()=> {
 return(
    <>
  <Nav/>
  <Body/>
  <Profile/>
  <Foot/>
  <Chat/>
  <Status/>
  <Refresh/>
  <Search/>
  <Bookmark/>
  <Share/>
  <Adder/>
  <Close/>
  <Minimize/>
  <Restore/>
  <Netflix/>
  <Hotstar/>
  <Voot/>
  <Vivo/>
  <Samsung/>
  <Apple/>
  </>
 )
}

export default App;
