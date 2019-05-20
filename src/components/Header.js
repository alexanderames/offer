import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="flex box pa1 mr9 justify-between nowrap blue">
        <div className="flex flex-fixed f3 black">
          <div className="fw7 mr9">Ibotta Offers</div>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">
          search
          </Link>
          <div className="ml1">|</div>
          <Link to="/" className="ml1 no-underline black">
            kill search
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
