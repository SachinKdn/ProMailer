import React, { useState } from 'react'
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="inner">
                    <header>
                        {/* <button type='button' className='sidebar-burger' onClick={(e)=>{setIsOpen(!isOpen)}}> */}
                            <div className='sidebar-burger' onClick={(e)=>{setIsOpen(!isOpen)}}>
                            {!isOpen ? (<MenuIcon />): (<CloseIcon/>)}
                            </div>
                        {/* </button> */}
                        <h2>ProMailer.</h2>
                    </header>
                    <nav>
                            <Link to="/"  style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <HomeIcon/>
                                
                                <span>Home</span>
                            </div>
                            </Link>
                            <Link to="/profile" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <Person/>
                                <span>Profile</span>
                            </div>
                            </Link>
                            <Link to="/setting" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <SettingsIcon/>
                                <span>Settings</span>
                            </div>
                            </Link>
                            <Link to="/appPassword" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <VisibilityOff/>
                                <span>App Password</span>
                            </div>
                            </Link>
                            <Link to="/guide" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <HelpOutlineIcon/>
                                <span>Guide</span>
                            </div>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <CallIcon/>
                                <span>Contact Us</span>
                            </div>
                            </Link>
                            <Link to="/logout" style={{ textDecoration: 'none' }}>
                            <div className='nav-item'>
                                <LogoutIcon/>
                                <span>Logout</span>
                            </div>
                            </Link>
                    </nav>
                </div>
        </aside>
    )
}

export default Navbar


