import React, { Component } from 'react'
import './App.css'
import OfferList from './OfferList'
import Search from './Search'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
      <Switch>
      <Route exact path='/search' component={Search} />
      <Route exact path='/' component={OfferList} />
      </Switch>
      </div>
      <OfferList />
      </div>
    );
  }
}

export default App;
