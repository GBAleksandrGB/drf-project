import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';



const ProjectItem = ({ project, deleteProject }) => {
    return (
        <tr>
            <td>{project.projectName}</td>
            <td>{project.projectUrl}</td>
            <td>{project.projectUsers}</td>
            <td><button onClick={() => deleteProject(project.id)} type='button'>Delete</button></td>
        </tr>
    );
}

const ProjectList = ({ projects, deleteProject }) => {
    return (
        <div>
            <table>
                <th>ProjectName</th>
                <th>ProjectUrl</th>
                <th>ProjectUsers</th>
                <th></th>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject} />)}
            </table>
            <Link to='/projects/create'>Create</Link>
        </div >
    );
}

export default ProjectList;