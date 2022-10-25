import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'



const emailIcon = <FontAwesomeIcon icon={faEnvelope} size="3x" color='white' />

function Navbar (){


    return(
        <div className='navbar'>
            <h1>
            Fun Seafood Recipes
            </h1>
            <a href='https://darckode.com/' style={{margin:'10px', color:'marron'}}>Home</a>
            <a href='https://github.com/Josh-Darling13' style={{margin:'10px', color:'marron'}}>Back to GitHub</a>
            <a href='mailto:squiddarling@gmail.com'>{emailIcon}</a>
        </div>
    )

}


export default Navbar;