import React from 'react';
import './Person.css';

const person = (props) =>{
return (
<div className="Person" >
<p onClick={props.click}>I am a {props.name} {props.age}</p>
<p>{props.children}</p>
<input type="text" onChange={props.change} defaultValue={props.name}/>
</div>

);

}

export default person;