import React, { Component, Fragment } from 'react';
import Logo from '../assets/logo.png';
import 'isomorphic-fetch';
import 'es6-promise';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import FilmID from './FilmID'
import People from './People';
import Person from './Person';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <main className="app-main">
        <img className="mx-auto d-block" src={Logo} alt="logo" />
        <Router>
          <Fragment>
            <Link to="/">
              <button className="button-link" type="submit">Go Home</button>
            </Link>
            <Link to="/films">
              <button className="button-link" type="submit">View Films</button>
            </Link>
            <Link to="/people">
              <button className="button-link" type="submit">View People</button>
            </Link>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/films" component={Films} />
              <Route exact path="/films/:id" component={FilmID}/>
              <Route exact path="/people" component={People} />
              <Route exact path="/people/:id" component={Person} />
            </Switch>
          </Fragment>
        </Router>
      </main>
    );
  }
}


export default App;