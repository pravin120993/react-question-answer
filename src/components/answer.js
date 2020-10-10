import React, { Component } from 'react'

class Answer extends Component {
  getInput() {
    const { ansCallback } = this.props;
    return <input onChange={ansCallback}/>
  }
  getRadioButton() {
    const { options, ansCallback } = this.props;
    return options.map(option => (
      <span key={option}>
        <input type="radio" id={option} name="gender" value={option} onChange={ansCallback}/>
        <label htmlFor={option}>{option}</label>
      </span>
    ))
  }
  getDropdown() {
    const { options, ansCallback } = this.props;
    return (
      <select onChange={ansCallback}>
        <option value=""> --- Select --- </option>
        {
          options.map(option => (
            <option value={option} key={option}>{option}</option>
          ))
        }
      </select>
    )
  }
  render() {
    const {type} = this.props;
    let answer;
    switch (type) {
      case 'input':
        answer = this.getInput()
        break;
      case 'dropdown':
        answer = this.getDropdown()
        break;
      case 'radioButton':
        answer = this.getRadioButton()
        break;
      default:
        answer = ''
    }
    return (
      <div>
        {answer}
      </div>
    )
  }
}

export default Answer;
