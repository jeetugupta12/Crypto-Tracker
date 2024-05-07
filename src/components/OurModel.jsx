import React from 'react'
import Btc from "../Images/btc.png"
import "./ourModel.css"
import {Link} from "react-router-dom"
import {RiLinkedinFill} from 'react-icons/ri'
import {  AiFillGithub,  } from "react-icons/ai";
import { SiGmail } from "react-icons/si";


const socialLinks=[
  {
    path: "https://github.com/jeetugupta12",
    icon: <AiFillGithub className="git" />,
  },

  {
    path: "https://www.linkedin.com/in/jeetu-gupta-78b458201/",
    icon: <RiLinkedinFill className="linkdin"/>,
  },
  {
    path: "https://www.jeetugupta4451@gmail.com/",
    icon: <SiGmail  className="gmail"/>,
  },

];

const OurModel = () => {
  return (
    <>
    <div className="btc-body">
      <div className="btc-img">
      <img src={Btc}/>
      </div>
      <div className='btc'>CryptoVerse</div>
    </div>
    

    <div className='footer'>
        <div className="social">
              {socialLinks.map((link,index) => (
              <Link to={link.path} key={index} >{link.icon}</Link>
              ))}
            
          </div>
        <div>&copy; CryptoVerse All Rights Reserved</div>
      
      </div>
    </>
    
  )
}

export default OurModel
