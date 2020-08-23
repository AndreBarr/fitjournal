import React from "react";

function ExerciseForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Type:
        <textarea
          name="type"
          value={props.type}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Sets:
        <textarea
          name="sets"
          value={props.sets}
          onChange={props.handleChange}
        />
      </label>
      <label>
        Reps:
        <textarea
          name="reps"
          value={props.reps}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Add Exercise" />
    </form>
  );
}

export default ExerciseForm;
