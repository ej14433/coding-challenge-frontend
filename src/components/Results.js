import React from 'react';
import ResultItem from './ResultItem';
import './Results.css';

const Results = props => {
	let resultItems = <li />;
	if (props.movies) {
		resultItems = props.movies.map(movie => {
			return <ResultItem key={movie.id} gif={movie} />;
		});
	}
	return <ul>{resultItems}</ul>;
};

export default Results;
