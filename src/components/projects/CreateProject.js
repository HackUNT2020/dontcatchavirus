import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'
export class CreateProject  extends Component {
    state ={
        title:'',
        content:''

    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        // prevents page from reloading
        e.preventDefault();
       this.props.createProject(this.state)
    }
    render() {
        return (
            <div className ="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Search for Disease or Location</h5>
                    <div className ="input-field">
                        <label htmlFor="title">Disease</label> 
                        {/* onchange handles and delete or typos in input field */}
                        <input type="text" id="title" onChange={this.handleChange}/>

                    </div>
                    {/* <div className ="input-field"> */}
                        {/* <label htmlFor="password">Password</label> */}
                        {/* onchange handles and delete or typos in input field */}
                        {/* <input type="password" id="password" onChange={this.handleChange}/> */}

                    {/* </div> */} 

                    <div className ="input-field">
                        <label htmlFor="content">location</label> 
                        {/* onchange handles and delete or typos in input field */}
                        <input type="text" id="content" onChange={this.handleChange}/>

                    </div>                  

                    

                    <div className="input-field">
                    
                        <button className ="btn waves-effect waves-light">Go!</button>
                   
                    </div>

                    
                </form>
                
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch) =>{
return {
    createProject:(project) =>dispatch(createProject(project))

}
}
export default connect(null, mapDispatchToProps)(CreateProject)
 