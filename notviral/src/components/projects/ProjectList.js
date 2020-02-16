import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) =>{
    return(
        <div className ="project-list section">
            {/* adding projects is to make sure if there are no projects available then use no action */}
            {/* using project as array to present posts */}
             { projects && projects.map(project => {
                return (
                    <Link to={'/project/'+ project.id}>  
                    <ProjectSummary project={project} key ={project.id} />
                    </Link>
                    
                )

            })}

        </div>
    )
}

export default ProjectList