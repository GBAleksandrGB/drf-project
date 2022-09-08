import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <tr>
            <td>{todo.todoProjectName}</td>
            <td>{todo.todoText}</td>
            <td>{todo.creatdAt}</td>
            <td>{todo.updatedAt}</td>
            <td>{todo.todoUser}</td>
            <td>{todo.isActive}</td>
            <td><button onClick={() =>
                deleteTodo(todo.id)} type='button'>Delete</button></td>
        </tr>
    );
}

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div>
            <table>
                <th>TodoProjectName</th>
                <th>TodoText</th>
                <th>CreatdAt</th>
                <th>UpdatedAt</th>
                <th>IsActive</th>
                <th></th>
                {todos.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo} />)}
            </table>
            <Link to='/todos/create'>Create</Link>
        </div>
    );
}

export default TodoList;