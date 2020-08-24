import React from "react";
import Exercise from "./Exercise";
import ExerciseForm from "./ExerciseForm";
import "../index.css";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          exercise: {
            type: "",
            sets: null,
            reps: null,
          },
        },
      ],
      type: "",
      sets: "",
      reps: "",
    };
  }

  addExercise(event) {
    const exercises = this.state.exercises.slice();
    const exercise = {
      type: this.state.type,
      sets: this.state.sets,
      reps: this.state.reps,
    };
    fetch("http://localhost:5000/exercise", {
      method: "POST",
      body: JSON.stringify(exercise),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((createdExercise) => {
        console.log(createdExercise);
        this.resetExerciseForm();
      });
    this.setState({
      exercises: exercises.concat([
        {
          exercise: exercise,
        },
      ]),
    });
    event.preventDefault();
  }

  resetExerciseForm() {
    this.setState({
      type: "",
      sets: "",
      reps: "",
    });
  }

  removeExercise(index) {
    const exercises = this.state.exercises.slice();
    exercises.splice(index, 1);
    this.setState({
      exercises: exercises,
    });
  }

  renderExercise(exercise, index) {
    return <Exercise exercise={exercise} index={index} key={index} />;
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  displayWorkout() {
    let workoutTable = [];
    for (let i = 1; i < this.state.exercises.length; i++) {
      workoutTable.push(
        this.renderExercise(this.state.exercises[i].exercise, i)
      );
    }
    return workoutTable;
  }

  render() {
    const exercises = this.state.exercises.slice();

    const button = exercises.map((exercise, index) => {
      return index !== 0 ? (
        <li key={index}>
          <button onClick={() => this.removeExercise(index)}>
            Remove: {index}
          </button>
        </li>
      ) : (
        ""
      );
    });

    return (
      <div className="workout">
        <div className="workout-table">
          <table>
            <tbody>
              <tr>
                <th>Order</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
              {this.displayWorkout()}
            </tbody>
          </table>

          <ExerciseForm
            type={this.state.type}
            sets={this.state.sets}
            reps={this.state.reps}
            handleSubmit={(event) => this.addExercise(event)}
            handleChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className="workout-info">
          <ol>{exercises.length > 1 ? button : ""}</ol>
        </div>
      </div>
    );
  }
}

export default Workout;
