import "../css/Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  return (
    <button>{props.text}</button>
  )
}

const SearchBar = (props) => {
  return(
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder={props.placeholder}></input>
    </div>
  )
}

const TopBar = () => {
  return (
    <header className="content-top-bar">
      <SearchBar placeholder="Search for new receipes here..." />
      <div className="content-top-bar-right">
        <FontAwesomeIcon icon={faSliders} />
        <Button text="Go to Premium" />
      </div>
    </header>
  );
}

export default function Content() {
  return (
    <div>
      <TopBar />
      <div className="content-banner">
        <div className="welcome-message">
          <h1>Only the best recipes!</h1>
          <p>Today's new recipes for you</p>
        </div>
        <div className="dashboard-numbers">
          <div className="number-left">
            <h2>168</h2>
            <p>Tutorials</p>
          </div>
          <div className="number-right">
            <h2>304</h2>
            <p>Recipes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
