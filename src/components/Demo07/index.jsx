import React, { Component } from 'react'

export default class NameForm extends Component {
  state = {
    inputValue: '',
    textValue: '',
    selectValue: ['coconut', 'lime']
  }

  handleSubmit = e => {
    alert(`name: ${this.state.inputValue}`)
    e.preventDefault()
  }

  handleChange = e => {
    e.target.value = e.target.name === 'selectValue' ? e.target.checked : e.target.value
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="inputValue"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <label>
          文章:
          <textarea
            name="textValue"
            value={this.state.textValue}
            onChange={this.handleChange}
          />
        </label>
        <select multiple name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
