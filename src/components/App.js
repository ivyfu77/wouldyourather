import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Nav from './Nav';
import Login from './Login';
import Home from './Home';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default connect()(App);
