import React from "react"
import { Link } from "react-router-dom"

export default class Film extends React.Component {
  render() {
    const film = this.props.catalog.find(num => {
        return (parseInt(this.props.match.params.id) === num.id)
    })
    return(
      <div>
        <p>Title : {film.title}</p>
        <p>Director : {film.director}</p>
        <p>Stars : {film.stars}</p>
        <p><img src = {film.image} alt=""/></p>
        <p>Description : {film.description}</p>
        <Link to = '/'>
        Back to catalog
        </Link>
      </div>
    )
  }
}