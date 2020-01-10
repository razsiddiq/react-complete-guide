import React from 'react';
import  './UserOutput.css';
const UserOutput = (props) => {
 return(
     <div className="UserOutput">
         <p>Hi I am {props.username} </p>
         <p>This is very cool!!! </p>
     </div>
 )
}

export default UserOutput;