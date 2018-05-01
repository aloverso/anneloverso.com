import React from 'react'

export default class Thumbnail extends React.Component {
  render() {

    const imgFile = require('../assets/img/' + this.props.imgurl)

    return (
      <div className="mas width-30">
        <img className="thumbnail" src={imgFile} />
        <div className="text-ml">
          {this.props.title}
        </div>
      </div>
    )
  }
}
