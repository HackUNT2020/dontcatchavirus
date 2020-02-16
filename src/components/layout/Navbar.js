import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'

const Navbar = () =>{
    return(
        <nav className="#424242 grey darken-3">
            <div className="container">
                <Link to ='/' className ="brand-logo">Not Viral</Link>
                {/* Add condition later */}
                <SignInLink />
                <SignOutLink />

            </div>
        </nav>
    )
}

export default Navbar