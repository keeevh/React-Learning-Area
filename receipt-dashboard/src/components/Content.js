import "../css/Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  return (
    <div>
      <div className="content-top-bar">
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Enter your search request..."></input>
        </div>
        <div className="content-top-bar-right">
          <FontAwesomeIcon icon={faSliders} />
          <button>Go to Premium</button>
        </div>
      </div>
    </div>
  );
}
