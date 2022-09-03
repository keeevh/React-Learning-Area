import "./App.css";

function SocialLogin() {
  return (
    <ul className="social-media-login-list">
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/104/104093.png"
          alt="Google Icon"
        ></img>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733605.png"
          alt="Facebook Icon"
        ></img>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
          alt="Instagram Icon"
        ></img>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
          alt="GitHub Icon"
        ></img>
      </li>
    </ul>
  );
}

function FormInput(props) {
  return(
    <input id={`form-${props.name}`} type={props.type} placeholder={props.name}></input>
  )
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
        <button type="submit" className="sign-up">
          Sign Up
        </button>
        <button className="sign-in">Sign In</button>
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
