import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[
      { name:'s1',age:12 },
      { name:'sia',age:190 },
      { name:'sig',age:109 }
    ],
    toggle: false
  };

  clickHandler = (newname) =>{
    this.setState({
      persons:[
        { name:newname,age:123 },
        { name:'siadd',age:190 },
        { name:'sigdd',age:109 }
      ]
    })
  }

  changeHandler = (event) =>{
    this.setState({
      persons:[
        { name:event.target.value,age:123 },
        { name:'siadd',age:190 },
        { name:'sigdd',age:109 }
      ]
    })
  }

  toggleHandler = () =>{

    const displayBtn = this.state.toggle;
    this.setState({toggle: !displayBtn})
  }


  render() {

    const style = {
      borderColor:'red',
      padding:'5px'
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
          this.state.persons.map( person => {
            return <Person key={person.age} name={person.name} age = {person.age}/>
          })        
      );
    }

    return (
      <div className="App">
        <h1>Hi I am here</h1>
        {/* <button style={style} onClick={this.clickHandler.bind(this,'myname')}>Click Here</button> */}
        <button style={style} onClick={this.toggleHandler}>Toggle Person</button>
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
