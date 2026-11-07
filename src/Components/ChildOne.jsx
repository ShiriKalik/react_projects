

import React from 'react'

const ChildOne = ({user }) => {
  return (
    <div >
            <h2>First Course</h2>
            <h3>{user.courseOne}</h3>
    </div>
  );
};

export default ChildOne;