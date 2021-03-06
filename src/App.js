import React, { Component } from 'react';
import request from 'superagent';

import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			movies: []
		};
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange(value) {
		if (value) {
			const api_key = '9910563a9e241cd2c1c307b03457e181';
			const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${value.replace(
				/\s/g,
				'+'
			)}`;

			// Use superagent to send GET request to TMdb API, which responds with a list of movies
			request.get(url, (err, res) => {
				this.setState({ movies: res.body.results });
			});
		}
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<SearchBar onChange={value => this.handleSearchChange(value)} />
				<Results movies={this.state.movies} />
			</div>
		);
	}
}

export default App;
