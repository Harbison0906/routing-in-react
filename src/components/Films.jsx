import React, { Component } from 'react';
import FilmID from './FilmID';


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
        <ul>
          {this.state.films.map(movie => {
            return (
              <li key={movie.id}>
                <div className="col-md-7 m-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.description}</p>
                      <FilmID />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Films;