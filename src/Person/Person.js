import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';
import Aux from '../hoc/Auxiliary/Auxiliary';
//import styled from 'styled-components';
import classes from './Person.css';
import withClass from '../hoc/withClass';
import {AuthContext} from '../App';

// const StyledDiv = styled.div`
//     width:60%;
//     margin:16px auto;
//     border:1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding:16px;
//     text-align: center;
//     '@media (min-width:500px)':{
//         width:'450px',
//     }
// `;
class Person extends Component {
// const person = (props) =>{
constructor( props ){
    super(props);
    this.inpuElement = React.createRef();
}
   

// return (
// <StyledDiv>
//     <p onClick={props.click}>I am a {props.name} {props.age}</p>
//     <p>{props.children}</p>
//     <input type="text" onChange={props.change} defaultValue={props.name}/>
// </StyledDiv>
// );

// return [
//         <p onClick={props.click}>I am a {props.name} {props.age}</p>,
//         <p>{props.children}</p>,
//         <input type="text" onChange={props.change} defaultValue={props.name}/>
   
// ];

componentDidMount (){
  // position = {index}
    // if(this.props.position === 0 ){
    //     this.inpuElement.focus();
    // }
   // this.inpuElement.focus();

   this.inpuElement.current.focus();

}
render() {
    // const style = {
    //     '@media (min-width:500px)':{
    //     width:'450px',
    //     }
    // }

    return (
        <Aux>
            <AuthContext.Consumer>
                {auth => auth ?<p>I am Authenticated</p> : null }
            </AuthContext.Consumer>
            {/* {this.props.isAuthenticated ? <p>I am Authenticated</p> : null} */}
            <p onClick={this.props.click}>I am a {this.props.name} {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text"
            //ref = {(inp) => {this.inpuElement = inp}}
            ref = {this.inpuElement}
            onChange={this.props.change} defaultValue={this.props.name}/>
        </Aux>
        );

    }
}

Person.propTypes = {
    click : PropTypes.func,
    name  : PropTypes.string,
    age   : PropTypes.number,
    changed : PropTypes.func
}

export default withClass(Person,classes.Person) ;