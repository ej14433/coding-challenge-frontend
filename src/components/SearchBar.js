import React, { Component } from 'react';

import './css/SearchBar.css';

export default class SearchBar extends Component {
	constructor() {
		super();
		this.state = { term: '' };
		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		this.setState({ value });
		this.props.onChange(value);
	}

	render() {
		return (
			<div className="container">
				<input
					placeholder="Search"
					type="text"
					onChange={e => this.onChange(e.target.value)}
				/>
			</div>
		);
	}
}
