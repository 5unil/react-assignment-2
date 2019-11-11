import React from 'react';


const validation = (props) => {

	let length = props.length,
		sentence = 'The text is too short'

	if (length >= 5) {

		sentence = "The text is long enough"
	} 

	console.log(length)

	return (

		<p>{sentence}</p>

		)
}

export default validation;

//in an if statement, is a var declared in the if statement scoped to just that if statement or the entire function? test with apps script