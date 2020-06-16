import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-button"
          className="submit-button"
          type="submit"
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

export default connect(mapStateToProps, { guessWord })(Input);
