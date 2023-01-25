import React from "react";
import img_world from '../images/world.png'

function Navbar(){
    return(
        <nav>
            <img src={img_world} alt='world' className="navbar--image" />
            <h3>my travel journey</h3>
        </nav>
    )
}

export default Navbar