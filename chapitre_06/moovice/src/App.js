import Home from "./components/Home"
import Weekly from "./components/Weekly"
import WeeklyBattle from "./components/WeeklyBattle"
import Popular from "./components/Popular"
import PopularBattle from "./components/PopularBattle"
import Favorites from "./components/Favorites"
import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default function App() {
  return(
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/weekly"
            component={Weekly}
          />
          <Route
            exact path="/weekly-battle"
            component={WeeklyBattle}
          />
          <Route
            exact path="/popular"
            component={Popular}
          />
          <Route
            exact path="/popular-battle"
            component={PopularBattle}
          />
          <Route
            exact path="/favorites"
            component={Favorites}
          />
        </Switch>
      </Router>
    </div>
  )
}
