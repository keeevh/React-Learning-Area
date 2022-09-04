import MenuBar from "./components/Menu.js";
import Content from "./components/Content.js";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="menu-bar">
        <MenuBar />
      </div>
      <div className="content-container">
        <Content />
      </div>
    </div>
  );
}

export default App;
