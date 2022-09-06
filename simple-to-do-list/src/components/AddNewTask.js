import React from "react";
import "../stylesheets/addnewtask.css";

class BackgroundOverlay extends React.Component {
  handleClick = () => {
    const backgroundOverlay = document.querySelector(
      ".new-task-background-overlay"
    );
    const newTaskField = document.querySelector(".new-task-container");
    newTaskField.classList.toggle("slide");
    backgroundOverlay.classList.toggle("fade-in");
  };
  render() {
    return (
      <div
        className="new-task-background-overlay"
        onClick={this.handleClick}
      ></div>
    );
  }
}

const AddTaskForm = () => {
  return (
    <form className="new-task-form">
      <input type="text" placeholder="Enter your new To-Do here..."></input>
      <select>
        <option>❤️ Personal</option>
        <option>⌚ Business</option>
        <option>🎓 Learning</option>
        <option>💪🏽 Fitness</option>
      </select>
      <button type="submit">Get it Done!</button>
    </form>
  );
};

function AddNewTask() {
  return (
    <div>
      <div className="new-task-container">
        <h2>What would you like to do?</h2>
        <AddTaskForm />
      </div>
      <BackgroundOverlay />
    </div>
  );
}
export default AddNewTask;
