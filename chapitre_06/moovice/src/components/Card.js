import React from "react"


export default class Card extends React.Component {
    constructor() {
        super()
        this.state={
          film: []
        }
      }
    componentDidMount() {
        this.setState({
            film: this.props.film,
            key: this.props.film.id
        })
    }

    render() {
        return(
          <div>
            <p>{this.state.film.title} {this.state.film.release_date}</p>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300/" + this.state.film.poster_path} alt="" />
                {this.state.film.overview}
            </div>
          </div>
        )
      }
}