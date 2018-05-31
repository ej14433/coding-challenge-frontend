import React from 'react';
import './ResultItem.css';

const ResultItem = movie => {
	const url = `https://image.tmdb.org/t/p/original/${movie.gif.poster_path}`;

	return (
		<li>
			<img src={url} />
		</li>
	);
};

export default ResultItem;
