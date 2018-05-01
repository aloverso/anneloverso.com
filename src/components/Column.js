import React from 'react';

import { getBgColor } from '../common'

export default class Column extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: true
    }
  }

  toggleHover() {
    // this.setState((state) => ({
    //   hover: !state.hover
    // }))
  }

  render() {
    return (
      <div
        className={`flex-child `}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        <div className="header-role">
          <div className={`hl font-btm bold ${this.getColor()}`}>{this.props.title}</div>
          {!this.state.hover && <div className="bam pad">
            {this.props.skills.map(skill => <div>{skill}</div>)}
          </div>}
        </div>
        <img src={this.props.img} className={`header-img ${this.getImgOpacity()}`}/>
      </div>
    )
  }

  getImgOpacity() {
    if (this.state.hover) {
      return 'opacity-full'
    }
    return 'opacity-light'
  }

  getColor() {
    if (this.state.hover) {
      return 'text-white'
    }
    return 'text-charcoal'
  }
}
