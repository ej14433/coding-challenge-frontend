import React from 'react';
import ResultItem from './ResultItem';
import './css/Results.css';

const Results = props => {
	let resultItems = <li />;
	if (props.movies) {
		resultItems = props.movies.map(movie => {
			return <ResultItem key={movie.id} movie={movie} />;
		});
	}
	return <ul>{resultItems}</ul>;
};

export default Results;
