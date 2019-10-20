import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Utils from "./util";
import NotFound from "./pages/NotFound";
import Globals from "./util/globals";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    policies: [],
  },

]

class Routes extends Component {

  render() {
    return (
      <Switch>
        {routes.map(route => {
          return <Route key={route.path} path={route.path} exact={route.exact} render={(props) => {
            const { history, match, location } = props

            //seting mor used vars globaly
            Globals.history = history
            Globals.match = match
            Globals.location = location

            //scroll to the begining
            Utils.scrollToStart()

            //policies evaluation to get access
            let haveAccess = true
            for (let polici of route.policies) {
              if (!polici()) {
                haveAccess = false
              }
            }

            if (haveAccess) {
              return <route.component {...props} />
            } else {
              return <Redirect to="/" />
            }
          }} />

        })}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Routes;
