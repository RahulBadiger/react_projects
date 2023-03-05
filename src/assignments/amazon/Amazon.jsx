import React from 'react'
import STYLE from "./amazon.module.css"

const Amazon = () => {
  return (
   <>
    <div className={STYLE.amazon}>
      <ul>
        <li>
          <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-11/amazon.jpg" alt="" />
        </li>
        <li>Address</li>
        <li>
          <button className={STYLE.home}>Home & Kitchen</button>
        </li>
        <li>
          <input className={STYLE.search} type="search" placeholder='Search Amazon.in' />
        </li>
        <li>lang</li>
        <li><button className={STYLE.sign}>Sign in</button></li>
        <li>Returns&Order</li>
        <li>Cart</li>
      </ul>
    </div>
    <div className={STYLE.sub}>
      <ul>
      <a href=""><li>
        <button>All</button>
      </li></a>
      <a href=""><li>
        <button>Amazon MiniTV</button>
      </li></a>
      <a href=""><li>
        <button>Sell</button>
      </li></a>
      <a href="">
      <li>
        <button>Best Sellers</button>
      </li>
      </a>
      <a href=""><li>
        <button>Mobiles</button>
      </li></a>
      <a href=""><li>
        <button>Customer Service</button>
      </li></a>
      <a href=""><li>
        <button>Today's Deals</button>
      </li></a>
      <a href=""><li>
        <button>Today's Deals</button>
      </li></a>
      <a href=""><li>
        <button>Prime</button>
      </li></a>
      <a href=""><li>
        <button>Amazon Pay</button>
      </li></a>
      <a href=""><li>
        <button>All</button>
      </li></a>

      <a href=""><li>
        <button>Fashion</button>
      </li></a>
      <a href=""><li>
        <button>New Releases</button>
      </li></a>
      <a href=""><li>
        <button>Home & Kitchen</button>
      </li></a>
      <a href=""><li>
        <button>Beauty & Personal Care</button>
      </li></a>
      <a href=""><li>
        <button>Books</button>
      </li></a>
      </ul>
    </div>
   </>
  )
}

export default Amazon