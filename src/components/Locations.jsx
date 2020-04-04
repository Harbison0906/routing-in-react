import React, { Component } from 'react';

class Locations extends Component {

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => {
        return response.json();
      })
      .then((location) => console.log(location));
  }

  render() {
    return (
      <h1>This is Page 2</h1>
    );
  }
}

export default Locations;