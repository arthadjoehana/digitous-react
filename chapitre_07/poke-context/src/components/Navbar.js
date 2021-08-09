import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  )
}