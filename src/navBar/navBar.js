import React from 'react';
import nav_logo from "../img/cat.png"


export default function NavBar() {
    return(
        <nav>
            <ul>
                <li className='nav_logo'><img src={nav_logo} /></li>
                <li><a href='#Maandag'>Maandag</a></li>
                <li><a href='#Dinsdag'>Dinsdag</a></li>
                <li><a href='#Woensdag'>Woensdag</a></li>
                <li><a href='#Donderdag'>Donderdag</a></li>
                <li><a href='#Vrijdag'>Vrijdag</a></li>
                <li><a href='#Zaterdag'>Zaterdag</a></li>
                <li><a href='#Zondag'>Zondag</a></li>
            </ul>
        </nav>
    );
};






