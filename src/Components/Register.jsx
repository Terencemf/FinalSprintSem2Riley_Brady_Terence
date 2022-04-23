import React, { Component } from 'react'

class Register extends Component {

    constructor(){
        super()
        this.state={
            showRegister:false
        }
    }

operation(){
    this.setState({
        showRegister: !this.state.showRegister
    })
}

  render() {
    return (
      <div id=''>
          {
              this.state.showRegister? <div>  <div id="registerPage">
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
      </div>
    )
  }
}

export default Register;
