import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Offer from './Offer'

const OFFER_SEARCH_QUERY = gql`
  query($filter: String){
    offers
    	(filter: {nameContains: $filter})
    {
      id
      imageUrl
      name
      description
      terms
    }
  }
`

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
        {this.state.offers.map((offer, index) => (
          <Offer key={offer.id} offer={offer} index={index} />
        ))}
      </div>
    )
  }

  _executeSearch = async () => {
    const { filter } = this.state
    const result = await this.props.client.query({
      query: OFFER_SEARCH_QUERY,
      variables: { filter },
    })
    const offers = result.data.offers
    this.setState({ offers })
    console.log(offers);
  }
}

export default withApollo(Search)
