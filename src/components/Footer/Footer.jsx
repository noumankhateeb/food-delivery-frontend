import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sint porro rem iure fuga, autem neque? Vel quae aliquid eligendi, excepturi ducimus nihil distinctio eveniet iure debitis, alias magnam?</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92-345-5437841</li>
            <li>noumankhateebnk@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>

    </div>
  )
}
