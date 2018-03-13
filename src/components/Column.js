import React from 'react';

export default class Column extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    return (
      <div
        className="flex-child"
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        <div className={`header-role hl font-btm ${this.getColor()}`}>{this.props.title}</div>
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
