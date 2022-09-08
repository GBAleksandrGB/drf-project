import React from 'react'


class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { todo_project_name: '', todo_text: '', todo_user: props.todoUser, is_active: true}
    }
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    handleSubmit(event) {
        this.props.createBook(
            this.state.todo_project_name, this.state.todo_text,
            this.state.todo_user, this.state.is_active
        )
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="todo_project_name">todo_project_name</label>
                    <input type="text" className="form-control" name="todo_project_name"
                        value={this.state.todo_project_name} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="todo_text">todo_text</label>
                    <input type="text" className="form-control" name="todo_text"
                        value={this.state.todo_text} onChange={(event) => this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="todo_user">todo_user</label>
                    <select name="todo_user" className='form-control'
                        onChange={(event) => this.handleChange(event)}>
                        {this.props.todos.map((item) => <option
                            value={item.id}>{item.todoUser}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <label for="is_active">is_active</label>
                    <input type="checkbox" className="" name="is_active"
                        value={this.state.is_active} onChange={(event) => this.handleChange(event)} />
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        );
    }
}

export default TodoForm;