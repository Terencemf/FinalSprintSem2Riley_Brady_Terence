import "./App.css";
import "./styleMain.css"
import React, {Component} from "react";
import Users from "./Components/Users"
import Login from "./Components/Login";
import Logout from "./Components/Logout"
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

class App extends Component {

  

  constructor(){
      super()
      this.state={
          showFriends:false
      }
  }

operation(){
  this.setState({
      showFriends: !this.state.showFriends
  })
}

render() {
  return (
    <div id=''>
        {
            this.state.showFriends? <div>  <div id="registerPage">
            <div className="regContainer">
              <h1 id="regAccount">Create an account</h1>
              <form action="" method="get">
                <div className="regForms">
                  <label htmlFor="regEmail">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="text"
                    name="regEmail"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <br />
                <div className="regForms">
                  <label htmlFor="regUname">
                    <strong>Username</strong>
                  </label>
                  <input
                    type="text"
                    name="regUname"
                    placeholder="Enter a Username"
                    required
                  />
                </div>
                <br />
                <div className="regForms">
                  <label htmlFor="regPass">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="text"
                    name="regPass"
                    placeholder="Enter a Password"
                    required
                  />
                </div>
                <br />
                <div className="ymd"></div>
                {/* <!-- Continue Button --> */}
                {/* <button id="continue">Continue</button> */}
                <br />
                <button id="continue">
                  Continue
                </button>
              </form>
            </div>
          </div></div> : null
        }
        <html><header>
    <nav> <svg className="mainLogo"width="180" height="180" viewBox="0 0 252 266" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="125.611" cy="124.133" rx="125.611" ry="124.133" fill="white"/>
<path d="M63.5444 195.067L118.576 248.267H8.51334L63.5444 195.067Z" fill="white"/>
  <circle cx="125.611" cy="125.611" r="96.0555" fill="#C4C4C4"/>
<path d="M92.8913 180.289L132.384 221.667H53.3984L92.8913 180.289Z" fill="#C4C4C4"/>
 <rect x="115.267" y="47.2888" width="23.6444" height="147.778" fill="#0038FF"/>
<rect x="73.8887" y="85.7111" width="23.6444" height="76.8444" fill="#FB0000"/>
<rect x="156.644" y="85.7111" width="23.6444" height="76.8444" fill="#1BC000"/>
</svg>
 <span className="mainLogoAbbr">L.T.N.T.</span>
 </nav>
 <Router>
 <Link to="/users" id="userBtn">Friends</Link>
 <Link to="/logout" id="logOutBtn">Log Out</Link>
 <Link to="/register" id="regBtn" onClick={()=>this.operation()}>Register</Link>
 <Link to="/login" id="loginBtn" onClick={()=>this.hideShowLogin()}>Login</Link>
 <Routes>
<Route path="/users" element={<Users />} />
<Route path="/login" element={<Login />} />
<Route path="/logout" element={<Logout />} />
<Route path="/register" element={<Register />} />
</Routes>
 </Router>
 </header>
 <body>
   <p id="welcome">Welcome to Long time no talk! The chat app for all!</p>
</body></html>
</div>)
}};
export default App;