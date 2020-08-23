import React from "react";
import "../index.css";

function ExerciseForm(props) {
  return (
    <form className="exercise-form" onSubmit={props.handleSubmit}>
      <label>
        <input
          name="type"
          type="text"
          value={props.type}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <input
          name="sets"
          type="number"
          value={props.sets}
          onChange={props.handleChange}
        />
      </label>
      <label>
        <input
          name="reps"
          type="number"
          value={props.reps}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Add Exercise" />
    </form>
  );
}

export default ExerciseForm;
