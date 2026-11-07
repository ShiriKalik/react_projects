import React from "react";
import CourseDetails from "./CourseDetails";

export const PersonDetails = () => {
  const user = {
    firstName: "shiri",
    lastName: "klik",
    age: 20,
  };

  const courseOne = {
    name: "React",
    grade: 95,
  };

  const courseTwo = {
    name: "JavaScript",
    grade: 88,
  };
  return (
    <div>
      <h1>Personal Details</h1>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <h3>Age: {user.age}</h3>

      <CourseDetails 
      courseName={courseOne.name} 
      grade={courseOne.grade} 
      />

      <CourseDetails 
      courseName={courseTwo.name} 
      grade={courseTwo.grade} 
      />
    </div>
  );
};
export default PersonDetails;
