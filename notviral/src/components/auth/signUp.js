import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SignUp} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

export class signUp extends Component {
    state ={
        email:'',
        password:'',
        firstName:'',
        lastName:''

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.SignUp(this.state)
    }
    render() {
        const {auth} = this.props;
        if(auth.uid) return <Redirect to ='/'/>
        return (
            <div className ="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className ="input-field">
                        <label htmlFor="email">Email</label> 
                        {/* onchange handles and delete or typos in input field */}
                        <input type="email" id="email" onChange={this.handleChange}/>

                    </div>
                    <div className ="input-field">
                        <label htmlFor="password">Password</label>
                        {/* onchange handles and delete or typos in input field */}
                        <input type="password" id="password" onChange={this.handleChange}/>

                    </div>
                    

                    <div className ="input-field">
                        <label htmlFor="firstName">First Name</label>
                        {/* onchange handles and delete or typos in input field */}
                        <input type="text" id="firstName" onChange={this.handleChange}/>

                    </div>

                    <div className ="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        {/* onchange handles and delete or typos in input field */}
                        <input type="text" id="lastName" onChange={this.handleChange}/>

                    </div>

                    <div className="input-field">
                        <button className ="btn red lighten-1 z-depth-0">Get Started!</button>
                   
                    </div>

                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return{
        auth:state.firebase.auth
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        SignUp: (newUser) => dispatch(SignUp (newUser))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(signUp)
