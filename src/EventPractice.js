import React, { Component } from "react";

class EventPractice extends Component {
  state = { message: "" };
  render() {
    return (
      <div>
        <h1>연습</h1>
        <input
          type="text"
          name="message"
          placeholder="힌트"
          value={this.state.message}
          onChange={(e) => {
            this.setState(
              { message: e.target.value },
              console.log(e.target.value)
            );
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
