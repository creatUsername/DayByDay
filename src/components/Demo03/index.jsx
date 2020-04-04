import React, { Component } from 'react'

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It's {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

class Demo03 extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  
  render() {
    return (
      <div>
        <Clock date={this.state.date} />
      </div>
    )
  }
}

export default Demo03