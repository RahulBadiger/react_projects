import React from 'react'
import STYLE from "./flip.module.css";

const Flip = () => {
  return (
    <div id={STYLE.flip}>
        <ul>
            <li>
            <iframe className='logo' src="https://giphy.com/embed/DE0zqhsXkMKVndSIQQ"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/flipkart-shopping-online-flipkart-big-billion-days-DE0zqhsXkMKVndSIQQ"></a></p>
            </li>
            <li>
                <input  type="search" placeholder='Search for products,brands and more ' />

            </li>
             <li>
                <button>Login</button>
            </li>
            <li>
                <a href="">Become a Seller</a>
            </li>
            <li>
                <a href="" >More</a>
                
            </li>
            <li>
                <a href="" >Cart </a>
                
            </li>
        </ul>
    </div>
  )
}

export default Flip;