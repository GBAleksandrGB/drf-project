import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserList from './components/User.js';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'users': []};
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/users/')
			.then(response => {
				const users = response.data
				this.setState({'users': users})
		}).catch(error => console.log(error));
	}

	render () {
		return (
		<div class="d-flex flex-column container-xl main">
			<nav class="navbar navbar-expand-lg bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">TODO</a>
					<button class="navbar-toggler" type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" 
									aria-current="page"
									href="#">Главная
								</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" 
									href="#" role="button" 
									data-bs-toggle="dropdown"
									aria-expanded="false">
										Профиль
								</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><hr class="dropdown-divider"/></li>
									<li><a class="dropdown-item" href="#">Выйти</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<a class="nav-link">Регистрация</a>
							</li>
						</ul>
						<form class="d-flex" role="search">
							<input class="form-control me-2" 
								type="search" 
								placeholder="Search" 
								aria-label="Search"/>
							<button class="btn btn-outline-success" 
								type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
			<div class="d-flex flex-grow-1 align-items-start mt-5">
				<UserList users={this.state.users} />
			</div>
      <footer class="d-flex justify-content-end mt-3">
				<p class="fst-italic">&copy; Все права принадлежат авторам</p>
      </footer>
		</div>
		);
	}
}

export default App;
