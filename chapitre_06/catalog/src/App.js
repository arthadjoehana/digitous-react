import React from "react"
import Film from "./components/film"
import Home from "./components/home"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    fetch("./catalog.json")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return(
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route
						path="/film/"
						render={(props) => (
							<Film {...props} id={this.state.id} />
						)}
					/>
          </Switch>
        </Router>
      </div>
    )
  }
}
