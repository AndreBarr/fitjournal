import React from "react";
import Exercise from "./Exercise";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [{ exercise: null }],
    };
  }

  addExercise() {
    const exercises = this.state.exercises.slice();
    this.setState({
      exercises: exercises.concat([{ exercise: <div>Test</div> }]),
    });
    return;
  }

  renderExercise(i) {
    return <Exercise value={i} />;
  }

  render() {
    let workout = [];
    for (let i = 0; i < this.state.exercises.length; i++) {
      workout.push(this.renderExercise(this.state.exercises[i].exercise));
    }
    return (
      <div>
        {workout}
        <button onClick={() => this.addExercise()}>Add Exercise</button>
      </div>
    );
  }
}

export default Workout;
