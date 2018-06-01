import React from 'react';
import './css/ResultItem.css';

const ResultItem = movie => {
	let url;
	if (movie.movieProp.poster_path) {
		url = `https://image.tmdb.org/t/p/original/${
			movie.movieProp.poster_path
		}`;
	} else {
		// If no image is returned from TMdb API, use placeholder image
		url = 'http://via.placeholder.com/200x300';
	}

	return (
		<li>
			<img src={url} alt="" />
			<p>{movie.movieProp.title}</p>
		</li>
	);
};

export default ResultItem;
