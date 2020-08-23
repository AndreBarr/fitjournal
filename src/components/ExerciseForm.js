import React from "react";
import Exercise from "./Exercise";

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  renderExercise(i) {
    return <Exercise value={i} key={i} />;
  }

  render() {}
}

export default ExerciseForm;
