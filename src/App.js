import React, { Component } from 'react';
import classes from './App.css';
//import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const ButtonStyled  = styled.button`
        border-color:${props=> props.alt ? 'red' : 'green'};
        background-color:${props=> props.alt ? 'red' : 'green'};
        padding:5px;
        color:white;
        &:hover {
          background-color:${props=> props.alt ? 'salmon' : 'salmon'};
        }
`;
class App extends Component {
  state = {
    persons:[
      { id: 'fi1', name:'s1',age:12 },
      { id: 'fi2', name:'sia',age:190 },
      { id: 'fi3', name:'sig',age:109 }
    ],
    toggle: false
  };

  /*clickHandler = (newname) =>{
    this.setState({
      persons:[
        { name:newname,age:123 },
        { name:'siadd',age:190 },
        { name:'sigdd',age:109 }
      ]
    })
  }*/

  changeHandler = (event , id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

   const person = {
     ...this.state.persons[personIndex]
   }

   //const person = Object.assign({},this.state.persons);

   person.name = event.target.value;

   const persons =[...this.state.persons];

   persons[personIndex] = person;

    this.setState({
      persons:persons
    })
  }

  toggleHandler = () =>{

    const displayBtn = this.state.toggle;
    this.setState({toggle: !displayBtn})
  }

  deleteHandler = (personIndex) => {
      //const persons = this.state.persons; // don't mutate state
 //use below either
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons]; // copy to another array
      persons.splice(personIndex,1);
      this.setState({persons:persons});

  }
 
  render() {

    const style = {
      borderColor:'red',
      backgroundColor:'red',
      padding:'5px',
      color:'white',
      ':hover':{
        backgroundColor:'salmon',
      }
    }

    const assignedClasses = [];

    if(this.state.persons.length <=2){
      assignedClasses.push('red');
    }

    
    if(this.state.persons.length <=1){
      assignedClasses.push('bold');
    }

    

    let person = null;

    if(this.state.toggle){
      /*person = (
      <div>
        <Person change={this.changeHandler} name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person click={() => this.clickHandler('newname')} name={this.state.persons[1].name} age = {this.state.persons[1].age}>adsfasdf</Person>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
      );*/

      person = (   
        <div>
          {
            this.state.persons.map( (person, index) => {
              return <Person 
              key={person.id}              
              click = {() => this.deleteHandler(index)}
              name={person.name} 
              age = {person.age}
              change={(event) => this.changeHandler(event,person.id)}
              />
            }) 
          }
        </div>     
                 
      );

      // style.backgroundColor='green';
      // style[':hover'] = {
      //   backgroundColor :'lightgreen'
      // }
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>Hi I am here</h1>
        {/* <button style={style} onClick={this.clickHandler.bind(this,'myname')}>Click Here</button> */}
        <ButtonStyled alt={this.state.toggle} onClick={this.toggleHandler}>Toggle Person</ButtonStyled>
        {person}
        {/* { this.state.toggle ?
            <div>
             <Person change={this.changeHandler} name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
             <Person click={() => this.clickHandler('newname')} name={this.state.persons[1].name} age = {this.state.persons[1].age}>adsfasdf</Person>
             <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}/>
           </div> : null
        } */}  
        
      </div>
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'Hi I am here'));
  }
}

//export default Radium(App);
export default App;

/*import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username:'khan'
  }

  nameChangeHandler = (event) => {
    this.setState({username:event.target.value})
  }

  render() {
    return (
        <div>
          <UserInput change={this.nameChangeHandler} currentName={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username="siddiq"/>
        </div>
      )

  }
}
export default App;*/




/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {

  const [currentState,changedState] =  useState({
    persons:[
      { name:'s1',age:12 },
      { name:'sia',age:190 },
      { name:'sig',age:109 }
    ],
    otherState: 'value'
  })

  const clickHandler = () =>{
    changedState({
      persons:[
        { name:'s1aa',age:123 },
        { name:'siadd',age:190 },
        { name:'sigdd',age:109 }
      ],otherState:currentState.otherState
    })
  }
 console.log(currentState);
  return (
    <div className="App">
      <h1>Hi I am here</h1>
      <button onClick={clickHandler}>Click Here</button>
      <Person name={currentState.persons[0].name} age = {currentState.persons[0].age}/>
      <Person name={currentState.persons[1].name} age = {currentState.persons[1].age}>adsfasdf</Person>
      <Person name={currentState.persons[2].name} age = {currentState.persons[2].age}/>
    </div>
  );
}
export default app; */
