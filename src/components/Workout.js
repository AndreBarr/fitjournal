import React from "react";
import Exercise from "./Exercise";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [{ exercise: null }],
      placeHolder: "Bench Press",
    };
  }

  addExercise(event) {
    const exercises = this.state.exercises.slice();
    this.setState({
      exercises: exercises.concat([
        { exercise: <div>{this.state.placeHolder}</div> },
      ]),
    });
    event.preventDefault();
  }

  renderExercise(i) {
    return <Exercise value={i} key={i} />;
  }

  handleChange(event) {
    this.setState({ placeHolder: event.target.value });
  }

  render() {
    let workout = [];
    for (let i = 0; i < this.state.exercises.length; i++) {
      workout.push(this.renderExercise(this.state.exercises[i].exercise));
    }
    return (
      <div>
        {workout}
        <form onSubmit={(event) => this.addExercise(event)}>
          <label>
            Type:
            <textarea
              value={this.placeHolder}
              onChange={(event) => this.handleChange(event)}
            ></textarea>
          </label>
          <input type="submit" value="Add Exercise" />
        </form>
      </div>
    );
  }
}

export default Workout;
