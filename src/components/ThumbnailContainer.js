import React from 'react'

export default class ThumbnailContainer extends React.Component {
  render() {
    return (
      <div className="pvl flex-parent flex-wrap">
        {this.props.children}
      </div>
    )
  }
}
