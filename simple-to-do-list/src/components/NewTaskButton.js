import React from "react";
import '../stylesheets/addnewtaskbutton.css';

class NewTaskButton extends React.Component {
  handleClick = () => {
    const backgroundOverlay = document.querySelector(
      ".new-task-background-overlay"
    );
    const newTaskField = document.querySelector(".new-task-container");
    backgroundOverlay.classList.toggle("fade-in");
    newTaskField.classList.toggle("slide");
  };
  render() {
    return <button className="new-task-button" onClick={this.handleClick}>+</button>;
  }
}

export default NewTaskButton;