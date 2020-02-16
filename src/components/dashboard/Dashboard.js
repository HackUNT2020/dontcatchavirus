import React, {Component} from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        console.log(this.props);
        const {projects} =this.props;

        return (
            <div className ="dashboard container">
                <div className="row">
                    {/* half of page size s12 m6 */}
                    <div className="#424242 grey darken-3">
                        <ProjectList projects={projects} />
                    </div>
                    {/* offset medium size screen, materialize grid */}
                    <div className = "#424242 grey darken-3">
                        <Notification />

                    </div>       


                       
                </div>
            </div>
                

        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.project.projects
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)