import React from "react"
import { NavLink } from "react-router-dom"

export default class Navbar extends React.Component {

  render() {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/weekly">Weekly</NavLink>
            <NavLink to="/weekly-battle">Weekly battle</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/popular-battle">Popular battle</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    )
  }
}