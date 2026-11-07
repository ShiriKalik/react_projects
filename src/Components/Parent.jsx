

import React from 'react'
import ChildOne from './ChildOne';
import ChildTow from './ChildTow';

const Parent = () => {
      const user = {
            id : 216378927,
            firstName : "shiri",
            lastName : "klik" ,
            courseOne : "react",
            courseTow : "c#",
            grade : 95
            };
     return(
        <div>
            <h1>Personal Details</h1>
            <h2>First Name: {user.firstName}</h2>
            <h2>Last Name: {user.lastName}</h2> 

            <ChildOne user ={user}/>
            <ChildTow  user ={user}/>
         </div>
 )
  
}

export default Parent;