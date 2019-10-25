import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

/**
 * This component is only for demostration
 */
const styles = theme => ({
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3)
  }
});

class PublicTemplate extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              FRONT10 TECHNICAL EXERCISE (DEV)
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          {this.props.children}
        </Container>
      </>
    );
  }
}

export default PublicTemplate;
