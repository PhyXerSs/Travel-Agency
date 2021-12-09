import React, { useEffect } from 'react'
import './Footer.css'
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <div className="footer">
            <span>Copyright &copy; 2021 PhyXerSs. All rights reserved</span>
            <div className="social-media">
                <BsFacebook />
                <AiFillInstagram />
                <BsLinkedin />
            </div>
        </div>
    )
}

export default Footer
