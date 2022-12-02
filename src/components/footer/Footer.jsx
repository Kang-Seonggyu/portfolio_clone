import React from "react";
import './footer.css'
import {AiFillFacebook,AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Dev_Kang</a>

      <ul className="permalinks">
        <li><a href="#"></a> </li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dev_Kang. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer