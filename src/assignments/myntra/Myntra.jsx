import React from 'react'
import STYLE from "./myntra.module.css"

const Myntra = () => {
  return (
    <div className={STYLE.myntra}>
        <ul>
            <li>
                <a href="">
                    <img src="https://play-lh.googleusercontent.com/wpnNPYIrdHC3Q_bcFXGpwoMvFvvvQnZJHmFKzumq5ZTRZKIzfxURAUGOMqhPhVxnggY" alt="" />

                </a>
            </li>
            <li>
                <a href=""> MEN</a>
            </li>
            <li>
                <a href="">WOMEN</a>
            </li>
            <li>
                <a href="">KIDS</a>
            </li>
            <li>
                <a href="">HOME & LIVING</a>
            </li>
            <li>
                <a href="">BEAUTY</a>
            </li>
            <li>
                <a href=""> STUDIO</a>
            </li>
            <li>
                <a href=""><input type="search" placeholder=' Search for products,brands and more' /></a>
            </li>
            <li>
                <a href="">Profile</a>
            </li>
            <li>
                <a href="">Wishlist</a>
            </li>
            <li>
                <a href="">Bag</a>
            </li>
        </ul>
    </div>
  )
}

export default Myntra