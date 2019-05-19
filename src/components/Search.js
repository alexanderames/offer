import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Offer from './Offer'

class Search extends Component {

  state = {
    offers: [],
    filter: ''
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.links.map((offer, index) => (
          <Offer key={offer.id} offer={offer} index={index} />
        ))}
      </div>
    )
  }

  _executeSearch = async () => {
    // ... you'll implement this 🔜
  }
}

export default withApollo(Search)
