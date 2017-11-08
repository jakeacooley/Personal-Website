import React, { Component } from 'react'

export default class extends Component {
  constructor() {
    super()

    // this.scrollToPage = this.scrollToPage.bind(this)
  }

  scrollToPage(e) {
    const element = document.getElementById(e)
    element.scrollIntoView({behavior: 'smooth'})
  }

  render() {
    return (
      <div className="bottom-nav">
        <div className="nav-anchors">
          <a onClick={this.scrollToPage.bind(this, 'about')}>About</a>
          <a onClick={this.scrollToPage.bind(this, 'contact')}>Contact</a>
          <a onClick={this.scrollToPage.bind(this, 'portfolio')}>Portfolio</a>
        </div>
        <a onClick={this.scrollToPage.bind(this, 'about')}>
          <i id="down"></i>
        </a>
      </div>
    )
  }
}
