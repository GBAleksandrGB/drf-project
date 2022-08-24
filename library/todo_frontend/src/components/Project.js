import React from 'react';
import '../index.css';


const ProjectItem = ({ project }) => {
    return (
        <tr>
            <td>{project.projectName}</td>
            <td>{project.projectUrl}</td>
            <td>{project.projectUsers}</td>
        </tr>
    );
}

const ProjectList = ({ projects }) => {
    return (
        <table>
            <th>ProjectName</th>
            <th>ProjectUrl</th>
            <th>ProjectUsers</th>
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    );
}

export default ProjectList;