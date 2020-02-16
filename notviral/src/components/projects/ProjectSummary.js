import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return(       
        
        <div className ="card z-depth-0 project-summary">
            
            <div className="card-content grey-text text-darken-3">
                
                <span className="card-title">{project.title}</span>
                <p>Location:{project.content}</p>
                <p>Post from {project.authorFirstName} {project.authorLastName}</p>
                {/* can be made dynamic later */}
                <p className="grey-text"> {moment(project.createdAt.toDate()).calendar()}</p>
                
            </div>


        </div>
        
    )

}

export default ProjectSummary