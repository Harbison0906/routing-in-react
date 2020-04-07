import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Films extends Component {
  state = {
    films: []
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(movie => {
        this.setState({ films: movie });
        console.log(movie)
      });
  }


  render() {
    return (
      <main>
        <h1 className="text-center">Films</h1>
        <ul className="list-group list-group-flush">
          {this.state.films.map(movie => {
            return (
              <li key={movie.id} className="list-group-item">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <Link to={`/films/${movie.id}`}>Film Details</Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Films;