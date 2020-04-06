import React, { Component, Fragment } from 'react';
import Logo from '../assets/logo.png';
import 'isomorphic-fetch';
import 'es6-promise';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import FilmID from './FilmID'
import Locations from './Locations';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <main className="app-main">
        <img className="mx-auto d-block" src={Logo} alt="logo" />
        <Router>
          <Fragment>
            <Link to="/">
              <button className="m-3" type="submit">Go Home</button>
            </Link>
            <Link to="/films">
              <button className="m-3" type="submit">View Films</button>
            </Link>
            <Link to="/locations">
              <button className="m-3" type="submit">View Locations</button>
            </Link>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/films" component={Films} />
              <Route path="/films/:id" component={FilmID}/>
              <Route path="/locations" component={Locations} />
            </Switch>
          </Fragment>
        </Router>
      </main>
    );
  }
}


export default App;