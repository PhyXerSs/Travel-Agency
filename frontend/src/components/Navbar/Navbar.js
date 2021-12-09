import React, { useEffect, useState } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import useWindowDimensions from '../../hook/useWindowDimensions';
import { Button } from '@material-ui/core';

function Navbar() {

    const [showMenu,setShowMenu]= useState(false);
    const [menuIconClick , setMenuIconClick] = useState(false)
    const { height, width } = useWindowDimensions();
    
    useEffect(()=>{
        
        if(width < 700){
            setShowMenu(true)
        }
        else {
            setShowMenu(false);
            setMenuIconClick(false)
        }
    },[width])

    return (
        <>
            <div className="navbar">
                <div className="Logo">
                    <LoyaltyIcon className="Logo-icon"/>
                    <span>PhyXerSs</span>
                </div>
                <ul style={{display: showMenu ?'none' : 'flex'}}>
                    <li>
                        <a className="home" href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#service" >About</a>
                    </li>
                    <li>
                        <a href="#recommend">Places</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>      
                </ul>
                <div className="connect-button" style={{display: showMenu ?'none' : 'flex'}}>
                    <span>CONNECT</span>
                </div>
                <Button  className="menu-icon" style={{display: showMenu ?'flex' : 'none'}} onClick={()=>setMenuIconClick(!menuIconClick)}>
                    <MenuIcon/>
                </Button>
            </div>
        <div className="menu-container" style={{top: menuIconClick ?'60px' : '-400px'}}>
                <ul >
                    <li>
                        <a className="home" href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#service" >About</a>
                    </li>
                    <li>
                        <a href="#recommend">Places</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>      
                </ul>
        </div>
        </>
    )
}

export default Navbar
