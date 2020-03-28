import React from 'react';


const Button = (props) => {
	console.log(props.style);
	return(
	<button 
		style= {props.style} 
		className = {props.type=='primary'? 'button-sub-text' : 'button-sub-text'}
		onClick= {props.action} > 
		{props.title} 
	</button>)
}


export default Button;