import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Login from "./components/Login"

export default function App() {
  return(
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <Home {...props}  />
            )}
          />
          <Route
            exact path="/login"
            render={(props) => (
              <Login {...props}  />
            )}
          />
          </Switch>
        </Router>
      </div>
    )
  
}
