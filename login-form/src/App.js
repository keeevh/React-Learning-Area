import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF, faGithub, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);
library.add(faInstagram);
library.add(faGoogle);
library.add(faGithub);

function SocialIcon(props) {
  return (
    <li>
      <FontAwesomeIcon className={`${props.brand}Icon`} icon={`fa-brands fa-${props.brand}`} />
    </li>
  );
}


function SocialLogin() {
  return (
    <ul className="social-media-login-list">
      <SocialIcon brand="google" />
      <SocialIcon brand="facebook" />
      <SocialIcon brand="instagram" />
      <SocialIcon brand="github" />
    </ul>
  );
}

function FormInput(props) {
  return (
    <input
      id={`form-${props.name}`}
      type={props.type}
      placeholder={props.name}
    ></input>
  );
}

function FormButton(props) {
  return (
    <button className={props.solid ? "solid" : "light"}>{props.text}</button>
  );
}

function LoginForm() {
  return (
    <form>
      <FormInput name="Name" />
      <FormInput name="Email" />
      <FormInput name="Password" />
      <div className="checkox-container">
        <FormInput type="checkbox" name="Checkbox" />
        <label for="form-checkbox">
          I agree to the <a href="https://www.github.com/keeevh">Terms</a> and{" "}
          <a href="https://www.github.com/keeevh">Privacy Policy</a>.
        </label>
      </div>
      <div className="form-buttons">
        <FormButton text="Sign Up" solid={true} />
        <FormButton text="Sign In" solid={false} />
      </div>
    </form>
  );
}

function CardLeft() {
  return (
    <div className="card card-left">
      <h1>Create Account</h1>
      <SocialLogin />
      <p>or use your email for registration:</p>
      <LoginForm />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CardLeft />
      <div className="card card-right"></div>
    </div>
  );
}

export default App;
