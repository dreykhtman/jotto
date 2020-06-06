import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
