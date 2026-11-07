import React from "react";
import Grade from "./Grade";
const ChildTow = ({ user }) => {
  return (
    <div>
      <h2>Second Course</h2>
      <h3>{user.courseTow}</h3>

      <Grade grade={user.grade} />
    </div>
  );
};

export default ChildTow;
