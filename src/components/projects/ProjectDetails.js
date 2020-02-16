import React from 'react'

const ProjectDetails =(props) => {
    const id = props.match.params.id;
    console.log(props);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className ="card-title">Health Care -{id}</span>
                    <p>Hello this is a pargraph</p>
                </div>
                <div className="#455a64 blue-grey darken-2">
                    <div>Posted my me Test Test</div>
                    <div>TimeStamp</div>

                </div>

            </div>  

            
        </div>
    )
}

export default ProjectDetails
