import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { Grid, Typography, Select, MenuItem, Popover, List, ListItem, Divider } from "@material-ui/core";
import PropTypes from "prop-types"
import PassengerType from "../../classes/PassengerType";
import SearchTravelActions from "../../redux/actions/SearchTravelActions";
import Globals from "../../utils/globals"
import IntegerNumber from "../../components/IntegerNumber";

const styles = theme => ({
  hidden: {
    visibility: "hidden",
    display: "none",
  },
  noSelect: {
    cursor: "unset",
  },
  errors: {
    padding: theme.spacing(2)
  },
  popoverPaper: {
    [theme.breakpoints.up("sm")]: {
      width: "320px",
    }
  }
})

const passengersTypes = [
  new PassengerType(PassengerType.ADULTS, "Adults"),
  new PassengerType(PassengerType.SENIORS, "Seniors"),
  new PassengerType(PassengerType.YOUTH, "Youth"),
  new PassengerType(PassengerType.CHILD, "Child"),
  new PassengerType(PassengerType.SEAT_INFANT, "Seat infant"),
  new PassengerType(PassengerType.LAP_INFANT, "Lap infant"),
]

class TravelersSelect extends Component {

  static propTypes = {
    travelers: PropTypes.object.isRequired
  }

  state = {
    error: "",
    anchorEl: null,
  }

  countAdults = (newTravelers) => {
    const adultsKeys = [
      PassengerType.ADULTS,
      PassengerType.SENIORS
    ]
    let count = 0
    for (let adultsKey of adultsKeys) {
      count += newTravelers[adultsKey]
    }
    return count
  }

  countChildrens = (newTravelers) => {
    const childrensKeys = [
      PassengerType.YOUTH,
      PassengerType.CHILD,
      PassengerType.SEAT_INFANT,
    ]
    let count = 0
    for (let childrenKey of childrensKeys) {
      count += newTravelers[childrenKey]
    }
    return count
  }

  countInfants = (newTravelers) => {
    return newTravelers[PassengerType.LAP_INFANT]
  }

  validate = (newTravelers) => {
    const adults = this.countAdults(newTravelers)
    const childrens = this.countChildrens(newTravelers)
    const infants = this.countInfants(newTravelers)
    const totalTravelers = adults + childrens + infants

    let error = ""
    if (totalTravelers > 16) {
      error = "Searches cannot have more than 16 travelers y mas letras para probar una cosa"
    } else if (adults > 9) {
      error = "Searches cannot have more than 9 adults"
    } else if (childrens > 7) {
      error = "Searches cannot have more than 7 children"
    } else if (infants > adults) {
      error = "Searches cannot have more lap infants than adults"
    } else if (adults <= 0) {
      error = "We cannot run searches for unaccompanied minors"
    }
    this.setState({
      error
    })
    return error === ""
  }

  onInc = passengerType => value => {
    let newTravelers = { ...this.props.travelers }
    newTravelers[passengerType] = value
    if (this.validate(newTravelers)) {
      Globals.dispatch(SearchTravelActions.changePassenger(passengerType, value))
    }
  }

  onDec = passengerType => value => {
    let newTravelers = { ...this.props.travelers }
    newTravelers[passengerType] = value
    if (this.validate(newTravelers)) {
      Globals.dispatch(SearchTravelActions.changePassenger(passengerType, value))
    }
  }

  itemClick = event => {
    event.preventDefault()
  }

  onOpen = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  onClose = (event) => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { travelers, classes } = this.props
    const { anchorEl, error } = this.state

    let text = ""
    const adults = this.countAdults(travelers)
    const childrens = this.countChildrens(travelers)
    const infants = this.countInfants(travelers)
    const totalTravelers = adults + childrens + infants
    if (totalTravelers === 1 && adults === 1) {
      text = "1 adult"
    } else {
      text = `${totalTravelers} travelers`
    }

    return (
      <>
        <Select
          value="show"
          fullWidth inputProps={{
            name: 'travelType',
          }}
          open={false}
          onClick={this.onOpen}
        >
          <MenuItem value="show" className={classes.hidden}>{text}</MenuItem>
        </Select>
        <Popover
          open={Boolean(anchorEl)}
          onClose={this.onClose}
          anchorEl={anchorEl}
          classes={{ paper: classes.popoverPaper }}
        >
          <List>
            {passengersTypes.map(passengerType => {
              return (
                <ListItem
                  key={passengerType.id}
                  className={classes.noSelect}
                  value={passengerType.id}
                >
                  <Grid
                    container
                    spacing={5}
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Grid item>
                      {passengerType.name}
                    </Grid>
                    <Grid item>
                      <IntegerNumber
                        value={travelers[passengerType.id]}
                        onInc={this.onInc(passengerType.id)}
                        onDec={this.onDec(passengerType.id)}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              )
            })}
          </List>
          {error !== "" ?
            <>
              <Divider />
              <Typography color="error" gutterBottom={false} className={classes.errors}>
                {error}
              </Typography>
            </>
            : null}
        </Popover>
      </>
    )
  }
}

export default withStyles(styles)(TravelersSelect)
