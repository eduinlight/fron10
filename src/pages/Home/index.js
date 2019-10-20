import React, { Component } from "react";

import { connect } from "react-redux";

class Home extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Hey you are here
    </div>
    )

  }
}

export default connect(state => {

})(Home);
