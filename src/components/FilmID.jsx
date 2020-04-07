import React, { Component } from 'react';



class FilmID extends Component {
  state = {
    movie: ''
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
      .then(res => res.json())
      .then(obj => {
        this.setState({ movie: obj })
        console.log(obj.title)
      })
  }

  render() {
    return (
      <main>
        <h1>{this.state.movie.title}</h1>
        <>
          <ul className="list-group list-group-flush m2">
            <li className="list-group-item">Description: {this.state.movie.description}</li>

            <li className="list-group-item">Directed by: {this.state.movie.director}</li>

            <li className="list-group-item">Produced by: {this.state.movie.producer}</li>

            <li className="list-group-item">Released on: {this.state.movie.release_date}</li>

            <li className="list-group-item">Rotten Tomatoes Score: {this.state.movie.rt_score}</li>

            <li className="list-group-item">People in this film: <a href={this.state.movie.people} target="_blank" rel="noopener noreferrer">{this.state.movie.people}</a></li>

            <li className="list-group-item">Species in this film: <a href={this.state.movie.species} target="_blank" rel="noopener noreferrer">{this.state.movie.species}</a></li>

            <li className="list-group-item">Locations in this film: <a href={this.state.movie.locations} target="_blank" rel="noopener noreferrer">{this.state.movie.locations}</a></li>

            <li className="list-group-item">URL: <a href={this.state.movie.url} target="_blank" rel="noopener noreferrer">{this.state.movie.url}</a></li>
          </ul>
        </>

      </main>

    )
  }
}




export default FilmID;