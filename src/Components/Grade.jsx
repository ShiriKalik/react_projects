import React from 'react'
import ChildOne from './ChildOne';
import ChildTow from './ChildTow';


const Grade = ({grade}) => {
    return (
    <div>
        <h3>Course Grade</h3>
       <h3>{grade}</h3>

    </div>
    );
}
export default Grade;