import React from "react"
import Card from "./Card";

export default class Popular extends React.Component {
  constructor() {
    super()
    this.state={
      movies: []
    }
  }
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2ad7a0573c9cad03df7ada3dcefa35f")
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        movies: data.results
      })
    });
  }
  componentDidUpdate() {
    console.log(this.state.movies)
  }
  render() {
    return(
      <div>
        <ul>
            {this.state.movies.map(film => {
                return <li>
                    <Card key={film.id} film={film} />
                </li>
            }
            )}
        </ul>
      </div>
    )
  }
}