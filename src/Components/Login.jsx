import React, { Component } from 'react'

class Login extends Component {

    constructor(){
        super()
        this.state={
            showFriends:true
        }
    }

hideShowLogin(){
    this.setState({
        showLogin: !this.state.showLogin
    })
}

  render() {
    return ( <div id='loginButton'>
              this.state.showLogin? <section id="loginPage">
              <div className="loginContainer">
                  <h1 id="welcomeBack"><strong>Welcome Back!</strong></h1>
                  <h2>Long time no see! Or talk!</h2>
                  <form action="" method="get">
                      <div class="forms">
                  <label htmlFor="Email Address"><strong>Email Address:</strong></label>
                  <input type="text" placeholder="Enter Email Address" name="username" required />  
                      </div>
                      <br/>
                      <div className="forms">
                  <label htmlFor="password"><strong>Password:</strong></label>
                  <input type="password" placeholder="Enter password" name="password"required />
                  </div>
                  <button id="login">Login</button>
                  <br/>
                  <br/>
                  </form>
              </div>
              </section>
              </div>
    )}};

    export default Login;
