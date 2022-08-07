import React from 'react';
import '../index.css';


const UserItem = ({user}) => {
	return (
		<tr>
			<td>{user.username}</td>
			<td>{user.email}</td>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
		</tr>
	);
}

const UserList = ({users}) => {
	return (
		<table>
			<th>Username</th>
			<th>Email</th>
			<th>First name</th>
			<th>Last Name</th>
			{users.map((user) => <UserItem user={user} />)}
		</table>
	);
}

export default UserList;
