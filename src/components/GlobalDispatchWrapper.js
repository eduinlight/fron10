import React, { PureComponent } from "react";

import { connect } from "react-redux";
import Globals from "../utils/globals";

class GlobalDispatchWrapper extends PureComponent {

  state = {
    dispatchOk: false
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dispatch) {
      Globals.dispatch = props.dispatch
      return {
        dispatchOk: true
      }
    }
    return {}
  }

  render() {

    if (!this.state.dispatchOk) {
      return null
    }

    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export default connect(state => ({}))(GlobalDispatchWrapper);
