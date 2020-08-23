import React from "react";
import Exercise from "./Exercise";
import ExerciseForm from "./ExerciseForm";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [{ exercise: null }],
      type: "Bench Press",
      sets: 3,
      reps: 3,
    };
  }

  addExercise(event) {
    const exercises = this.state.exercises.slice();
    this.setState({
      exercises: exercises.concat([
        {
          exercise: (
            <div>
              <div>{this.state.type}</div>
              <div>{this.state.sets}</div>
              <div>{this.state.reps}</div>
            </div>
          ),
        },
      ]),
    });
    event.preventDefault();
  }

  renderExercise(i) {
    return <Exercise value={i} key={i} />;
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  render() {
    let workout = [];
    for (let i = 0; i < this.state.exercises.length; i++) {
      workout.push(this.renderExercise(this.state.exercises[i].exercise));
    }
    return (
      <div>
        {workout}
        <ExerciseForm
          type={this.state.type}
          sets={this.state.sets}
          reps={this.state.reps}
          handleSubmit={(event) => this.addExercise(event)}
          handleChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

export default Workout;
