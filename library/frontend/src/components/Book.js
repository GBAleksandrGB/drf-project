import React from 'react';
import { Outlet } from 'react-router-dom';


const BookItem = ({ book }) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.authors}</td>
        </tr>
    );
}

const BookList = ({ books }) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AUHTOR</th>
            </tr>
            {books.map((book) => <BookItem book={book} />)}
            <Outlet />
        </table>
    );
}

export default BookList;
