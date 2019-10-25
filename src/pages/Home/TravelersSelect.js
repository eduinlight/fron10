import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Select, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types"
import LocationSearchInput from "../../components/LocationSearch";
import TravelType from "../../classes/TravelType";
import SearchTravelActions from "../../redux/actions/SearchTravelActions";
import TravelClass from "../../classes/TravelClass";
import Globals from "../../utils/globals"

const styles = theme => ({
})

class TravelersSelect extends Component {

  static propTypes = {
    travelers: PropTypes.object.isRequired,
    onChange: PropTypes.func,
  }

  state = {
    error: ""
  }

  validate = () => {

  }

  onChange = (event) => {

  }

  render() {
    const { travelers } = this.props

    const TType = () => (
      <Select
        value={searchTravel.travelType}
        fullWidth inputProps={{
          name: 'travelType',
        }}
        onChange={this.onChange}
      >
        {travelTypes.map(travelType => {
          return (
            <MenuItem key={travelType.id} value={travelType.id}>{travelType.name}</MenuItem>
          )
        })}
      </Select>
    )

    const TClass = () => (
      <Select
        value={searchTravel.travelClass}
        fullWidth inputProps={{
          name: 'travelClass',
        }}
        onChange={this.onChange}
      >
        {travelClasses.map(travelClass => {
          return (
            <MenuItem key={travelClass.id} value={travelClass.id}>{travelClass.name}</MenuItem>
          )
        })}
      </Select>
    )

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Typography variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TType />
        </Grid>
        <Grid item xs={12} sm={4}>

        </Grid>
        <Grid item xs={12} sm={4}>
          <TClass />
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocationSearchInput />
        </Grid>
      </Grid>
    )
  }
}

export default connect(state => ({

}))(withStyles(styles)(TravelersSelect))
