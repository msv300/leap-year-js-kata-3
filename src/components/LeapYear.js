import React, { Component } from 'react';

export default class LeapYear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
      error: 'Enter a valid year.'
    };
  }

  handleInputChange = (e) => {
    const { value } = e.target;

    if (value > 0) this.setState({ year: value, error: null });
    else this.setState({ year: value, error: 'Enter a valid year!' });
  }

  render() {
    const { year, error } = this.state;

    return (
      <div testId='wrapper'>
        <label>Enter year: </label>
        <input
          testId='enterYearInput'
          type='number'
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <span testId="resultSpan">
          {error ? error : `Entered year is ${year}.`}
        </span>
      </div>
    );
  }
}