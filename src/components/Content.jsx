import React from "react";
import Courses from "./Courses";

export default function Content() {
  const course = "Programming computers";
  const courseDescription = () => "Iterations and resolution of problems";
  return (
    <section>
      <div>
        <h1>Component Content</h1>
        <Courses courseName={course} description={courseDescription} />
      </div>
    </section>
  );
}
