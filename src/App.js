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

  </>
 )
}

export default App;
