import React from "react";

export default function Courses(props) {
  return (
    <>
      <p>Course name: {props.courseName}</p>
      <p>Description: {props.description()}</p>
    </>
  );
}
