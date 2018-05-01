import React from 'react';

export default class FocusItem extends React.Component {

  render() {
    if(!this.props.item.imgurl) this.props.item.imgurl = "teaching.jpg"
    const imgFile = require('../assets/img/' + this.props.item.imgurl)

    return (

      <div className="row">
        <div className="four columns">
          <img src={imgFile} className="width-100"/>
        </div>
        <div className="eight columns">
          <h2 className="bold">
            {this.props.item.title}
          </h2>
        </div>
      </div>
    )
  }
}
