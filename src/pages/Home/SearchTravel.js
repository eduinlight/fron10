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

const travelTypes = [
  new TravelType(TravelType.ROUND_TRIP, "Round-trip"),
  new TravelType(TravelType.ONE_WAY, "One-way"),
  new TravelType(TravelType.MULTI_CITY, "Multi-city"),
]

const travelClasses = [
  new TravelClass(TravelClass.ECONOMY, "Economy"),
  new TravelClass(TravelClass.PREMIUM, "Premium Economy"),
  new TravelClass(TravelClass.BUSINESS, "Business"),
  new TravelClass(TravelClass.FIRST, "First"),
  new TravelClass(TravelClass.MULTIPLE, "Multiple")
]

class SearchTravel extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: "Search travel"
  }

  state = {

  }

  componentDidMount() {
  }

  static getDerivedStateFromProps(props, state) {

  }

  onChange = (event) => {
    Globals.dispatch(
      SearchTravelActions.change(event.target.name, event.target.value)
    )
  }

  reset = () => {
    Globals.dispatch(
      SearchTravelActions.reset()
    )
  }

  render() {
    const { title, classes, searchTravel } = this.props

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
  searchTravel: state.forms.searchTravel
}))(withStyles(styles)(SearchTravel))
