import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { project_name: '', project_url: '', project_usersname: props.projects[0].id }
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit(event) {
        this.props.createProject(this.state.project_name, this.state.project_url, this.state.project_usersname)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="login">project_name</label>
                    <input type="text" className="form-control" name="project_name"
                        value={this.state.project_name} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="login">project_url</label>
                    <input type="text" className="form-control" name="project_url"
                        value={this.state.project_url} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="projectUsers">projectUsers</label>
                    <select name="projectUsers" className='form-control'
                        onChange={(event) => this.handleChange(event)}>
                        {this.props.projects.map((item) => <option
                            value={item.id}>{item.projectUsers}</option>)}
                    </select>
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        );
    }
}

export default ProjectForm;