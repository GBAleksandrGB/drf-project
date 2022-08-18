import React from 'react';
import '../index.css';


const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>{todo.todoProjectName}</td>
            <td>{todo.todoText}</td>
            <td>{todo.creatdAt}</td>
            <td>{todo.updatedAt}</td>
            <td>{todo.todoUser}</td>
            <td>{todo.isActive}</td>
        </tr>
    );
}

const TodoList = ({ todos }) => {
    return (
        <table>
            <th>TodoProjectName</th>
            <th>TodoText</th>
            <th>CreatdAt</th>
            <th>UpdatedAt</th>
            <th>IsActive</th>
            {todos.map((todo) => <TodoItem todo={todo} />)}
        </table>
    );
}

export default TodoList;