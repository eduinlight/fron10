import React, { Component } from "react";

import { connect } from "react-redux";
import PublicTemplate from "../../templates/guest";
import { withStyles } from "@material-ui/styles";
import Noti from "../../utils/noti";
import Globals from "../../utils/globals";
import ApiActions from "../../redux/actions/api";

const styles = theme => ({

})

class Home extends Component {

  componentDidMount() {
    Globals.dispatch(ApiActions.getCountries())
  }

  render() {
    return (
      <PublicTemplate>
        {this.props.getCountries.status}
      </PublicTemplate>
    )
  }
}

export default connect(state => ({
  getCountries: state.api.getCountries,
}))(withStyles(styles)(Home))
