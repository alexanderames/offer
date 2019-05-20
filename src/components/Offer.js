import React, { Component } from 'react'

class Offer extends Component {
  render() {
    return (
      <div className="list">
        <div className="pic">
          <img width={75} height={75} src={this.props.offer.imageUrl} alt="new" />
        </div>
        <div className="item">
          {this.props.offer.name}
          {this.props.offer.description}
          <i>{this.props.offer.terms}</i>
        </div>
      </div>
    )
  }
}

export default Offer
