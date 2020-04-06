import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class FilmID extends Component {

  state = {
    movieID: undefined
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/id")
      .then(res => res.json())
      .then(obj => {
        this.setState({ movieID: obj })
        console.log(obj)
      })
  }

  render() {
    return (
      <main>
        <ul>
          {this.state.movieID.map(obj => {
            return (
              <div>
                <Link to={`/films/${obj.id}`}>{obj.title}</Link>
              </div>
            )
          })}
        </ul>
      </main>
    )
  }
}




export default FilmID;