import React from 'react'

export default class ThumbnailContainer extends React.Component {
  render() {
    return (
      <div className="pvl flex-parent">
        {this.props.children}
      </div>
    )
  }
}
