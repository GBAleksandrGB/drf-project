import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import deleteBook from '../App';


const BookItem = ({ book }) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.authors}</td>
            <td><button onClick={() => deleteBook(book.id)}
                type='button'>Delete</button></td>
        </tr>
    );
}

const BookList = ({ books }) => {
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AUHTOR</th>
                    <th></th>
                </tr>
                {books.map((book) => <BookItem book={book} deleteBook={deleteBook} />)}
                <Outlet />
            </table>
            <Link to='/books/create'>Create</Link>
        </div>
    );
}

export default BookList;
