import React from 'react';


const Input = (props) => {
	//console.log(props.value);
	return (  
  <div class="qc-form-row ">
    <label for={props.name} class="qc-form-label">{props.title}</label>
    <input
      className="form-field"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
}

export default Input;