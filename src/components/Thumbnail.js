import React from 'react'

export default class Thumbnail extends React.Component {
  render() {

    const imgFile = require('../assets/img/' + this.props.imgurl)

    return (
      <div className="flex-child mad">
        <img className="thumbnail" src={imgFile} />
        <div className="bold">
          {this.props.title}
        </div>
      </div>
    )
  }
}
