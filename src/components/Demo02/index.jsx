import React, { Component } from 'react'

function Avatar(props) {
  return (
    <img className="avatar" src={props.user.url} alt={props.user.name} />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="userinfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

class Demo02 extends Component {
  state = {
    author: {
      name: '李靖',
      avatarUrl: ''
    },
    text: '枯燥',
    date: new Date().toLocaleDateString()
  }

  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.state.author} />
        <div className="Comment-text">
          {this.state.text}
        </div>
        <div className="Comment-date">
          {this.state.date}
        </div>
      </div>
    )
  }
}


export default Demo02
