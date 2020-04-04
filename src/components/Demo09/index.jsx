import React, { Component } from 'react'

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

const Contacts = props => (
  <div>Contacts</div>
)

const Chat = props => (
  <div>Chat</div>
)

const Dialog = props => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.message}</p>
    {props.children ? props.children : null}
  </div>
)

class WelcomeDialog extends Component {
  state = {
    login: ''
  }

  handleChange = e => {
    this.setState({ login: e.target.value })
  }

  handleSignup = () => {
    this.state.login && alert(`Welcome aboard, ${this.state.login}`)
  }

  render() {
    return (
      <Dialog
        title="welcome"
        message="Thank you for your watching!"
      >
        <input
          value={this.state.login}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSignup}>
          Sign Me Up!
      </button>
      </Dialog>
    )
  }
}

export default class Demo09 extends Component {
  render() {
    return (
      <>
        <SplitPane
          left={
            <Contacts />
          }
          right={
            <Chat />
          }
        />
        <WelcomeDialog />
      </>
    )
  }
}
