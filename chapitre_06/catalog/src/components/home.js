import React from "react"
import { Link } from "react-router-dom"

export default class Home extends React.Component {

  render() {
    return(
        <div>
        <h1>Home</h1>
        <ul>
            {this.props.catalog.map(num => {
                return <li>
                    <Link to = {'/' + num.id}>
                    {num.title}
                    </Link>
                </li>
            }
            )}
        </ul>
        </div>
    )
  }
}