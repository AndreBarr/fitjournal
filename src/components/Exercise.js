import React from "react";

function Exercise(props) {
  return (
    <header>
      <div className="row">
        Type: {props.exercise.type}
        Sets: {props.exercise.sets}
        Reps: {props.exercise.reps}
      </div>
    </header>
  );
}

export default Exercise;
