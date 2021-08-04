import React from "react"
import Film from "./components/film"
import Home from "./components/home"
import catalog from "./catalog.json"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Router>
          <Switch>
            <Route
              exact path="/"
              render={(props) => (
                <Home {...props} catalog={catalog} />
              )}
            />
            <Route
              exact path="/:id"
              render={(props) => (
                <Film {...props} catalog={catalog} />
              )}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
