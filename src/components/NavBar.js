import React from 'react'
import nav4Logo from '../images/Channel_4-3.png'

export default function NavBar() {


    return (
        <div className="nav-wrapper">
            <div className="nav_ribbon navBar">
                <div className="navBar-words"> Stay Classy
                    <img className="nav_logo" src={nav4Logo} alt="this is the channel 4 logo from Anchorman"/>
                    San Diego
                </div>
            </div>
        </div>
    )
}