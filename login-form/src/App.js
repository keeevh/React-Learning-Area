import './App.css'



function App() {
  return (
    <div className="App">
      <div className="card card-left">
        <h1>Create Account</h1>
        <ul className="social-media-login-list">
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/104/104093.png" alt="Google Icon"></img>
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733605.png" alt="Facebook Icon"></img>
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="Instagram Icon"></img>
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="GitHub Icon"></img>
          </li>
        </ul>
        <p>or use your email for registration:</p>
        <form>
          <input type="text" value="" placeholder="Name"></input>
          <input type="text" value="" placeholder="Email"></input>
          <input type="text" value="" placeholder="Password"></input>
          <div className="checkox-container">
            <input type="checkbox" id="form-checkbox"></input>
            <label for="form-checkbox">
              I agree to the <a href="https://www.github.com/keeevh">Terms</a>{" "}
              and <a href="https://www.github.com/keeevh">Privacy Policy</a>.
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit" className="sign-up">Sign Up</button>
            <button className="sign-in">Sign In</button>
          </div>
        </form>
      </div>
      <div className="card card-right"></div>
    </div>
  );
}

export default App;
