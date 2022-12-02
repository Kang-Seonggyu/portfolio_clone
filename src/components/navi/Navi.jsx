import React, {useState} from "react";
import './navi.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from "react-icons/ri";

const Navi = () => {
  const [activeNavi, setActiveNavi] = useState('#')

  return (
    <navi>
      <a href="#" onClick={() => setActiveNavi('#')} className={activeNavi === '#'?"active":""} > <AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNavi('#about')} className={activeNavi === '#about'?"active":""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNavi('#experience')} className={activeNavi === '#experience'?"active":""}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNavi('#services')}  className={activeNavi === '#services'?"active":""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNavi('#contact')}  className={activeNavi === '#contact'?"active":""}><BiMessageSquareDetail /></a>
    </navi>
  )
}

export default Navi