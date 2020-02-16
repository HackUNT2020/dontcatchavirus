import React, { Component } from 'react'

export class SignIn extends Component {
    state ={
        email:'',
        password:''

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className ="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
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
                    <div className="input-field">
                        <button className ="btn waves-effect waves-light">Login</button>
                   
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn
