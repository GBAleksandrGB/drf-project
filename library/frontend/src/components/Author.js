import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const AuthorItem = ({ author }) => {
	return (
		<tr>
			<td><Link to={`${author.id}`}>{author.id}</Link></td>
			<td>{author.name}</td>
			<td>{author.birthday_year}</td>
		</tr>
	)
}

const AuthorList = ({ authors }) => {
	return (
		<table>
			<th>ID</th>
			<th>NAME</th>
			<th>BIRTHDAY_YEAR</th>
			{authors.map((author) => <AuthorItem author={author} />)}
			<Outlet />
		</table>
	);
}

export default AuthorList;
