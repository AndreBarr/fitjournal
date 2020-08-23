import React from "react";
import Exercise from "./Exercise";
import ExerciseForm from "./ExerciseForm";
import "../App.css";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          exercise: {
            type: null,
            sets: null,
            reps: null,
          },
        },
      ],
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
          exercise: {
            type: this.state.type,
            sets: this.state.sets,
            reps: this.state.reps,
          },
        },
      ]),
    });
    event.preventDefault();
  }

  renderExercise(excercise) {
    return <Exercise exercise={excercise} />;
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  render() {
    let workoutTable = [];
    for (let i = 1; i < this.state.exercises.length; i++) {
      workoutTable.push(this.renderExercise(this.state.exercises[i].exercise));
    }
    return (
      <div>
        <table className="workout-table">
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
          {workoutTable}
        </table>

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
