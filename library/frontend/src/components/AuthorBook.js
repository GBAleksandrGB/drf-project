import React from 'react';
import { useParams, Outlet } from 'react-router-dom';


const BookItem = ({ book }) => {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.authors}</td>
        </tr>
    );
}

const AuthorBookList = ({ books }) => {
    let { id } = useParams();
    console.log(id)
    let filtered_items = books.filter((book) => book.authors.id === Number(id));
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AUTHOR</th>
            </tr>
            {filtered_items.map((book) => <BookItem book={book} />)}
            <Outlet />
        </table>
    );
}

export default AuthorBookList;
