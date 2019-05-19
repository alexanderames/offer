import React, { Component } from 'react'

class Offer extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.offer.name} ({this.props.offer.imageUrl})
          {this.props.offer.description}
          <i>{this.props.offer.terms}</i>
        </div>
      </div>
    )
  }
}

export default Offer
