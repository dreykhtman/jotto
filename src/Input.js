/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: '',
    };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
    this.setState({ currentGuess: '' });

    // console.log(this.state);
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          data-test="submit-button"
          className="submit-button btn btn-primary"
          type="submit"
          onClick={(e) => this.submitGuessedWord(e)}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
