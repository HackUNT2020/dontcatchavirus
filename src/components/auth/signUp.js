import React, { Component } from 'react'

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
        console.log(this.state)
    }
    render() {
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
                        <button className ="btn waves-effect waves-light">Get Started!</button>
                   
                    </div>

                    
                </form>
                
            </div>
        )
    }
}

export default signUp
