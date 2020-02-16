import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'

const Navbar = (props) =>{
    const {auth} = props;
    //console.log(auth);
    const links = auth.uid ? <SignInLink /> : <SignOutLink/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to ='/' className ="brand-logo">Not Viral</Link>
                {/* Add condition later */}
                {links}

                {/* <SignInLink />
                <SignOutLink /> */}

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps)(Navbar)