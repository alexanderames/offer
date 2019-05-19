import React, { Component } from 'react'
import Offer from './Offer'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const OFFER_QUERY = gql`
{
  offers
  (filter: {nameContains: ""})
  {
    id
    imageUrl
    name
    description
    terms
  }
}
`

class OfferList extends Component {
  render() {
    return (
      <Query query={OFFER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const offersToRender = data.offers

          return (
            <ul>
              {offersToRender.map(offer => <Offer key={offer.id} offer={offer} />)}
            </ul>
          )
        }}
      </Query>
    )
  }
}

export default OfferList
