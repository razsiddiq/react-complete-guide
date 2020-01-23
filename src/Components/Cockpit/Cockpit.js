import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';


class Cockpit extends Component {
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

        if(this.props.personLength <=2){
          assignedClasses.push('red');
        }
    
        
        if(this.props.personLength <=1){
          assignedClasses.push('bold');
        }

        
    
        return (
            <Aux>
                <h1 className={assignedClasses.join(' ')}>Hi I am here</h1>
                <button style={style} onClick={this.props.toggle}>Toggle Person</button>
                {/* <ButtonStyled alt={this.state.toggle} onClick={this.toggleHandler}>Toggle Person</ButtonStyled> */}
                <button onClick={this.props.login}>Log In</button>
            </Aux>
        );
    
    }
}
 

export default React.memo(Cockpit);