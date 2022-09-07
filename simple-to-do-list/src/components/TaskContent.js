import React from "react";
import "../stylesheets/taskcontent.css";

let tasks = [
  {
    title: "Clean Apartment",
    category: "❤️ Personal",
    status: "open",
  },
  {
    title: "Gym Workout",
    category: "💪🏽 Fitness",
    status: "open",
  },
  {
    title: "Finish Presentation",
    category: "⌚ Business",
    status: "open",
  },
  {
    title: "Improve React Skills",
    category: "🎓 Learning",
    status: "open",
  },
];

function RenderTasks() {
    const allTasks = tasks.map((task) => (
      <div className="task-card">
        <input type="text" value={task.title} disabled></input>
        <div className="task-card-lower">
          <p>{task.category}</p>
          <div>
            <button>Edit</button>
            <button>Delete</button>
            <button>Check</button>
          </div>
        </div>
      </div>
    ));
    const openTasks = allTasks.filter(task => {task.status = "open"});
    return(
        <div>{openTasks}</div>
    )
}

export default RenderTasks;
