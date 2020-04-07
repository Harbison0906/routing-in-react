import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class People extends Component {
  state = {
    people: []
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(person => {
        this.setState({ people: person });
        console.log(person)
      });
  }

  render() {
    return (
      <main>
        <h1 className="text-center">People</h1>
        <ul className="list-group list-group-flush">
          {this.state.people.map(person => {
            return (
              <li key={person.id} className="list-group-item">
                <h5 className="card-title">{person.name}</h5>
                <Link to={`/people/${person.id}`}>More Info</Link>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default People;