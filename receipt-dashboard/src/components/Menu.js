import "../css/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faGlobe, faHeart, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
    return(
        <h2 className="menu-logo">Foodoo</h2>
    )
}

const UserImage = () => {
    return (
      <div className="menu-user-image-container">
        <img
          className="menu-user-image"
          src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="Avatar"
        />
        <div className="menu-user-circle"></div>
      </div>
    );
}

const UserInfo = (props) => {
    return (
      <div className="menu-user-info">
        <h3 className="center">{props.name}</h3>
        <h4 className="center">{props.job}</h4>
      </div>
    );
}

const UserProfile = () => {
    return (
      <div className="menu-user-profile">
        <UserImage />
        <UserInfo name="Kristin Watson" job="Chef de Partie"/>
      </div>
    );
}

const MenuItem = (props) => {
    return (
      <li>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.name}</span>
      </li>
    );
}

const MenuNav = () => {
    return (
      <ul className="menu-navigation">
        <MenuItem name="Receipes" icon={faBookOpen} />
        <MenuItem name="Favorites" icon={faHeart} />
        <MenuItem name="Courses" icon={faWindowMaximize} />
        <MenuItem name="Community" icon={faGlobe} />
      </ul>
    );
}

export default function MenuBar() {
  return (
    <div>
      <Logo />
      <UserProfile />
      <MenuNav />
    </div>
  );
}
