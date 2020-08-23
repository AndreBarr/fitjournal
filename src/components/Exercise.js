import React from "react";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <header>{this.props.value}</header>;
  }
}

export default Exercise;
