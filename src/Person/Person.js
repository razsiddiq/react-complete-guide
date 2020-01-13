import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import './Person.css';


const StyledDiv = styled.div`
    width:60%;
    margin:16px auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align: center;
    '@media (min-width:500px)':{
        width:'450px',
    }
`;

const person = (props) =>{

    const style = {
        '@media (min-width:500px)':{
          width:'450px',
        }
      }

return (
<StyledDiv>
    <p onClick={props.click}>I am a {props.name} {props.age}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} defaultValue={props.name}/>
</StyledDiv>
);

}

export default person;