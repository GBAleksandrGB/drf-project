import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import UserList from './components/User.js';
import ProjectList from './components/Project.js';
import TodoList from './components/Todo.js';
import LoginForm from './components/auth.js';
import {
	BrowserRouter,
	Route,
	Link,
	Routes,
	Navigate
} from 'react-router-dom'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'users': [],
			'projects': [],
			'todos': [],
			'token': ''
		};
	};

	set_token(token) {
		const cookies = new Cookies()
		cookies.set('token', token)
		this.setState({ 'token': token }, () => this.load_data())
	};

	is_authenticated() {
		return !!this.state.token;
	};

	logout() {
		this.set_token('')
	};

	get_token_from_storage() {
		const cookies = new Cookies()
		const token = cookies.get('token')
		this.setState({ 'token': token }, () => this.load_data())
	};


	get_token(username, password) {
		axios.post('http://127.0.0.1:8000/api-token-auth/', {
			username: username,
			password: password
		}).then(response => {
			this.set_token(response.data['token'])
		}).catch(error => alert('Неверный логин или пароль'))
	};

	get_headers() {
		let headers = { 'Content-Type': 'application/json' }
		if (this.is_authenticated()) {
			headers['Authorization'] = 'Token ' + this.state.token
		};
		return headers;
	};

	load_data() {
		const headers = this.get_headers();
		axios.get('http://127.0.0.1:8000/api/users/', { headers })
			.then(response => {
				console.log(response.data)
				this.setState({ 'users': response.data });
			}).catch(error => console.log(error));

		axios.get('http://127.0.0.1:8000/api/projects/', { headers })
			.then(response => {
				console.log(response.data)
				this.setState({ 'projects': response.data });
			}).catch(error => {
				console.log(error);
			});
		axios.get('http://127.0.0.1:8000/api/todos/', { headers })
			.then(response => {
				console.log(response.data)
				this.setState({ 'todos': response.data });
			}).catch(error => {
				console.log(error)
			});
	};

	componentDidMount() {
		this.get_token_from_storage();
	};

	render() {
		return (
			<div class="d-flex flex-column container-xl main">
				<BrowserRouter>
					<nav class="navbar navbar-expand-lg bg-light">
						<div class="container-fluid">
							<a class="navbar-brand" href="/">TODO</a>
							<button class="navbar-toggler" type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse"
								id="navbarSupportedContent">
								<ul class="navbar-nav me-auto mb-2 mb-lg-0">
									<li class="nav-item">
										<Link to='/' class="nav-link active"
											aria-current="page">
											Главная
										</Link>
									</li>
									<li class="nav-item">
										<Link to='projects' class="nav-link active"
											aria-current="page">
											Проекты
										</Link>
									</li>
									<li class="nav-item">
										<Link to='users' class="nav-link active"
											aria-current="page">
											Участники
										</Link>
									</li>
									<li class="nav-item">
										<Link to='todos' class="nav-link active"
											aria-current="page">
											Заметки
										</Link>
									</li>
									<li class="nav-item">
										{this.is_authenticated() ? <button
											onClick={() => this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
									</li>
								</ul>
								<form class="d-flex" role="search">
									<input class="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search" />
									<button class="btn btn-outline-success"
										type="submit">Search</button>
								</form>
							</div>
						</div>
					</nav>
					<div class="d-flex flex-grow-1 align-items-start mt-5">
						<Routes>
							<Route path='/' element={<Navigate to='users' />} />
							<Route
								path='users'
								element={<UserList users={this.state.users} />}
							/>
							<Route
								path='projects'
								element={<ProjectList projects={this.state.projects} />}
							/>
							<Route
								path='todos'
								element={<TodoList todos={this.state.todos} />}
							/>
							<Route
								path="login"
								element={<LoginForm get_token={
									(username, password) =>
										this.get_token(username, password)} />
								}
							/>
							<Route path='*' element={
								<p>Страница не найдена</p>
							} />
						</Routes>
					</div>
					<footer class="d-flex justify-content-end mt-3">
						<p class="fst-italic">
							&copy; Все права принадлежат авторам
						</p>
					</footer>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
