import React, { Component } from "react";

/**
 * This component is only for demostration
 */
class GuestTemplate extends Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default PublicTemplate;
