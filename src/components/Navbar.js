import React, { Component } from 'react';
import './css/Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<img
					// Co-hire logo
					src={require('./img/co-hire-logo.png')}
					alt=""
				/>
			</nav>
		);
	}
}
