import React, { } from "react"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles"
import { Grid, Fab } from "@material-ui/core";

const styles = theme => ({
  value: {
    width: "23px",
    textAlign: "center"
  }
})

class IntegerNumber extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    canInc: PropTypes.bool,
    canDec: PropTypes.bool,
    onInc: PropTypes.func.isRequired,
    onDec: PropTypes.func.isRequired,
  }

  static defaultProps = {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    canInc: true,
    canDec: true,
  }

  onInc = (event) => {
    const { value, onInc } = this.props
    onInc(value + 1)
  }

  onDec = (event) => {
    const { value, onDec } = this.props
    onDec(value - 1)
  }

  render() {
    const { value, classes, min, max } = this.props
    const disableDec = value <= min
    const disableInc = max <= value

    return (
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Fab
            size="small"
            onClick={this.onDec}
            disabled={disableDec}
          >
            -
          </Fab>
        </Grid>
        <Grid item className={classes.value}>
          {value}
        </Grid>
        <Grid item>
          <Fab
            size="small"
            onClick={this.onInc}
            disabled={disableInc}
          >
            +
          </Fab>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(IntegerNumber)
