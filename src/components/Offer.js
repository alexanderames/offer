import React, { Component } from 'react'

class Offer extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.offer.name} | ({this.props.offer.imageUrl})
          <ul>
            <li>{this.props.offer.description}</li>
            <li><i>{this.props.offer.terms}</i></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Offer
