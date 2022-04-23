import React, { Component } from 'react'

class Users extends Component {

    constructor(){
        super()
        this.state={
            showFriends:true
        }
    }

viewFriends(){
    this.setState({
        showFriends: !this.state.showFriends
    })
}

  render() {
    return (
      <div id=''>
          {
              this.state.showFriends? <div>   <body id="friendBox">
              <div id="box">
             <div class="spacing">
             <div class="friend">Meaningull12<span id="on">Online</span></div>
             </div>
             <div class="spacing">
             <div class="friend">NewfieBull<span id="on">Online</span></div>
             </div>
             <div class="spacing">
             <div class="friend">Smurfthrower<span id="on">Online</span></div>
             </div>
             <div class="spacing">
             <div class="friend">tscott42<span id="off">Offline</span></div>
             </div>
             <div className="spacing">
             <div className="friend">caitdawg<span id="off">Offline</span></div>
             </div>
             </div></body></div> : null
          }

      </div>
    )
  }
}

export default Users;