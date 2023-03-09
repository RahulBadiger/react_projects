import React from 'react'
import STYLE from "./net.module.css"

const Net = () => {
  return (
    <>
   <div className={STYLE.main}>
   <div className={STYLE.block1}>
        <ul>
            <li><a href=""><img src="https://i.ytimg.com/vi/ZMak63mHq5Y/maxresdefault.jpg" alt="" /></a></li>
            <li><a href="">Home</a></li>
            <li><a href="">TV Shows</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Latest</a></li>
            <li><a href="">My List</a></li>
        </ul>
    </div>
    <div className={STYLE .block2}>
        <ul>
            <li><a href=""><input type="search" placeholder='Search Movies' /></a></li>
            <li><a href="">KIDS</a></li>
            <li><a href="">DVD</a></li>
            <li><a href="">surprise</a></li>
            <li><a href=""></a>Notifications</li>
            <li><a href=""></a><button>SIGN IN</button></li>
        </ul>
    </div>  
   </div>
  
    </>
  )
}

export default Net