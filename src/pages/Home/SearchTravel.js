import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Select, MenuItem, Hidden, Button, Icon, Divider } from "@material-ui/core";
import PropTypes from "prop-types"
import LocationSearchInput from "../../components/LocationSearch";
import TravelType from "../../classes/TravelType";
import SearchTravelActions from "../../redux/actions/SearchTravelActions";
import TravelClass from "../../classes/TravelClass";
import Globals from "../../utils/globals"
import TravelersSelect from "./TravelersSelect";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MomentUtils from '@date-io/moment';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import CalendarIcon from "@material-ui/icons/CalendarToday"

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
    date: new Date()
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

    const DateInput = ({ value, onChange, ...other }) => (
      <Grid container spacing={1} alignItems="flex-end" wrap="nowrap">
        <Grid item>
          <CalendarIcon />
        </Grid>
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker value={value} format="D/MM/YYYY - HA" onChange={onChange} {...other} />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    )

    return (
      <>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Typography variant="h4">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <TType />
            </Grid>
            <Grid item>
              <TravelersSelect travelers={searchTravel.travelers} />
            </Grid>
            <Grid item>
              <TClass />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TType />
            </Grid>
            <Grid item xs={12}>
              <TravelersSelect travelers={searchTravel.travelers} />
            </Grid>
            <Grid item xs={12}>
              <TClass />
            </Grid>
          </Grid>
        </Hidden>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <LocationSearchInput
              placeholder="From"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <LocationSearchInput
              placeholder="To"
            />
          </Grid>
          <Grid item xs={12} sm={searchTravel.travelType === TravelType.ONE_WAY ? 4 : 2}>
            <DateInput value={this.state.date} onChange={() => { }} />
          </Grid>
          {searchTravel.travelType !== TravelType.ONE_WAY &&
            <Grid item xs={12} sm={2}>
              <DateInput value={this.state.date} onChange={() => { }} />
            </Grid>
          }
          {searchTravel.travelType !== TravelType.MULTI_CITY &&
            <Grid item xs={12} sm={2}>
              <Button fullWidth variant="contained" color="primary">
                <SearchIcon />
                Search
            </Button>
            </Grid>
          }
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid spacing={3} container direction="row" justify="space-between">
          {searchTravel.travelType === TravelType.MULTI_CITY &&
            <Grid item xs={12} sm="auto">
              <Button fullWidth>
                <AddIcon />
                Add flight
            </Button>
            </Grid>
          }

          <Grid item xs={12} sm="auto">
            <Button fullWidth onClick={this.reset}>
              Clear
            </Button>
          </Grid>
          {searchTravel.travelType === TravelType.MULTI_CITY &&
            <Grid item xs={12} sm="auto">
              <Button fullWidth variant="contained" color="primary">
                <SearchIcon />
                Search
            </Button>
            </Grid>
          }

        </Grid>
      </>
    )
  }
}

export default connect(state => ({
  searchTravel: state.forms.searchTravel
}))(
  withStyles(styles)(SearchTravel)
)
