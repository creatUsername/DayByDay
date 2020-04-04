import React, { Component } from 'react'

function UserGreeting(props) {
  return <h1>Welcome !</h1>
}

function GuestGreeting(props) {
  return <h1>Sign Up</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

export default class Demo05 extends Component {
  state = {
    isLogin: false,
    unreadMessages: new Array(5)
  }

  handleClick = () => {
    this.setState(state => ({
      isLogin: !state.isLogin
    }))
  }

  render() {
    let button = this.state.isLogin ? 'LOGOUT' : 'LOGIN'
    return (
      <div>
        <button onClick={this.handleClick}>
          {button}
        </button>
        <Greeting isLoggedIn={this.state.isLogin} />
        <Mailbox unreadMessages={this.state.unreadMessages} />
      </div>
    )
  }
}
