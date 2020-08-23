import React from "react";

function Exercise(props) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.exercise.type}</td>
      <td>{props.exercise.sets}</td>
      <td>{props.exercise.reps}</td>
    </tr>
  );
}

export default Exercise;
