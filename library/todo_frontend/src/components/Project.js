import React from 'react';
import '../index.css';


const ProjectItem = ({ project }) => {
    return (
        <tr>
            <td>{project.project_name}</td>
            <td>{project.project_url}</td>
            <td>{project.project_users}</td>
        </tr>
    );
}

const ProjectList = ({ projects }) => {
    return (
        <table>
            <th>Project_name</th>
            <th>Project_url</th>
            <th>Project_users</th>
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    );
}

export default ProjectList;