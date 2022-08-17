import React from 'react';
import '../index.css';


const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>{todo.todo_project_name}</td>
            <td>{todo.todo_text}</td>
            <td>{todo.creatd_at}</td>
            <td>{todo.updated_at}</td>
            <td>{todo.todo_user}</td>
            <td>{todo.is_active}</td>
        </tr>
    );
}

const TodoList = ({ todos }) => {
    return (
        <table>
            <th>Todo_project_name</th>
            <th>Todo_text</th>
            <th>Creatd_at</th>
            <th>Updated_at</th>
            <th>Is_active</th>
            {todos.map((todo) => <TodoItem todo={todo} />)}
        </table>
    );
}

export default TodoList;