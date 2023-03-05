import React from 'react'
import STYLE from "./zomato.module.css"

const Zomato = () => {
  return (
    <div className={STYLE.zomato}>
        <ul>
            <li>
                <a href=""><img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" alt="" /></a>
            </li>
            <li>
                <a href=""><button>Bengaluru</button></a>
            </li>
            <li>
                <a href=""><input type="search"  placeholder='  Search for restaurant,cuisine or a dish' /></a>
            </li>
            <li>
                <a href=""> <button>Log in</button></a>
            </li>
            <li>
                <a href=""><button>Sign Up</button></a>
            </li>
        </ul>
    </div>
  )
}

export default Zomato