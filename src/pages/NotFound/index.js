import React, { Component } from "react";

import { connect } from "react-redux";

class NotFound extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>NOT FOUND PAGE</div>
    )
  }
}

export default connect(state => {

})(NotFound);
