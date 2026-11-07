import React from "react";

export const CourseDetails = ({ courseName, grade }) => {
  return (
    <div>
      <h2>Course Details</h2>

      <h3>Course Name: {courseName}</h3>
      <h3>Grade: {grade}</h3>
    </div>
  );
};
export default CourseDetails;
