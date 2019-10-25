import React, { Component } from "react";
import { connect } from "react-redux";
import SearchTravel from "./SearchTravel";
import PublicTemplate from "../../templates/guest"
import Globals from "../../utils/globals"
import ApiActions from "../../redux/actions/api"
import { Typography, Divider, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles"

const styles = theme => ({
  pre: {
    backgroundColor: "#1d1d1d",
    color: "white",
    padding: theme.spacing(2)
  }
})

class Home extends Component {
  componentDidMount() {
    Globals.dispatch(
      ApiActions.getCountries()
    )
  }

  render() {
    const { classes } = this.props

    return (
      <PublicTemplate>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <SearchTravel
              title="Search hundreds of travel sites at once."
            />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Typography variant="h6">Reducer</Typography>
          </Grid>
          <Grid item>
            <pre className={classes.pre}>
              {JSON.stringify(this.props.searchTravel, undefined, 2)}
            </pre>
          </Grid>
        </Grid>
      </PublicTemplate>
    )
  }
}

export default connect(state => ({
  searchTravel: state.forms.searchTravel
}))(
  withStyles(styles)(Home)
)
