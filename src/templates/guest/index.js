import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

/**
 * This component is only for demostration
 */
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class PublicTemplate extends Component {
  render() {
    const { classes } = this.props

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              FRONT10 TECHNICAL EXERCISE (DEV)
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </>
    );
  }
}

export default withStyles(styles)(PublicTemplate);
