import React, { Component } from 'react'
import {connect} from 'react-redux'

import {createProject}  from '../../store/actions/projectActions'

import {Redirect} from 'react-router-dom'

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
        //console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/');
    }
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to ='/signin'/>
        return (
            <div className ="container">
                <form className="white" onSubmit={this.handleSubmit} >
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
                        <button className ="btn red lighten-1 z-depth-0">Go!</button>
                   
                    </div>

                    
                </form>
                
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        // below line passes project array to createProject function
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)