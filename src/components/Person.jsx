import React, { Component } from 'react';



class Person extends Component {
  state = {
    person: ''
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
      .then(res => res.json())
      .then(obj => {
        this.setState({ person: obj })
        console.log(obj.name)
      })
  }

  render() {
    return (
      <main>
        <h1>{this.state.person.name}</h1>
        <>
          <ul className="list-group list-group-flush m2">
            <li className="list-group-item">Gender: {this.state.person.gender}</li>

            <li className="list-group-item">Age: {this.state.person.age}</li>

            <li className="list-group-item">Eye Color: {this.state.person.eye_color}</li>

            <li className="list-group-item">Hair Color: {this.state.person.hair_color}</li>

            <li className="list-group-item">Films: {this.state.person.films}</li>

            <li className="list-group-item">Species that belong to this person: <a href={this.state.person.species} target="_blank" rel="noopener noreferrer">{this.state.person.species}</a></li>

            <li className="list-group-item">URL: <a href={this.state.person.url} target="_blank" rel="noopener noreferrer">{this.state.person.url}</a></li>
          </ul>
        </>

      </main>
    );
  }
}

export default Person;