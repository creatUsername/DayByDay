import React, { Component } from 'react'

export default class Demo06 extends Component {
  state = {
    list: [...new Array(5).keys()]
  }

  render() {
    return (
      <ul>
        {
          this.state.list.map((ele, index) => (
            <li key={ele.index}>{ele}</li>
          ))
        }
      </ul>
    )
  }
}
