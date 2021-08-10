import React from "react"
import Card from "./Card";

export default class PopularBattle extends React.Component {
  constructor() {
    super()
    this.state={
      movies: [],
      currentBattle: 0
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
                    <Card key={film.id} title={film.title} releaseDate={film.release_date} synopsis={film.overview} poster={film.poster_path} film={film} />
                </li>
            }
            )}
        </ul>
      </div>
    )
  }
}