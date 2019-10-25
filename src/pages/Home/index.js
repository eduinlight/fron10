import React, { Component } from "react";
import { connect } from "react-redux";
import SearchTravel from "./SearchTravel";
import PublicTemplate from "../../templates/guest"
import Globals from "../../utils/globals"
import ApiActions from "../../redux/actions/api"

class Home extends Component {
  componentDidMount() {
    Globals.dispatch(
      ApiActions.getCountries()
    )
  }

  render() {
    return (
      <PublicTemplate>
        <SearchTravel
          title="Search hundreds of travel sites at once."
        />
      </PublicTemplate>
    )

  }
}

export default connect(state => ({

}))(Home)
