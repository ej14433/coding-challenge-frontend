import React from 'react';
import './css/ResultItem.css';

const ResultItem = movie => {
	let url;
	if (movie.movie.poster_path) {
		url = `https://image.tmdb.org/t/p/original/${movie.movie.poster_path}`;
	} else {
		url = 'http://via.placeholder.com/200x300';
	}

	return (
		<li>
			<img src={url} />
			<p>{movie.movie.title}</p>
		</li>
	);
};

export default ResultItem;
