import React from 'react'
import Thumbnail from './Thumbnail'
import ThumbnailContainer from './ThumbnailContainer'
import FocusItem from './FocusItem'
import SkillsBar from './SkillsBar'

import data from '../data/data.json'
import { getBgColor } from '../common'

export default class Subpage extends React.Component {

  getThumbnails() {
    let thumbnails = this.props.items.map((item, index) => {
      if (index > 0) {
        return <Thumbnail imgurl={data[item].imgurl} title={data[item].title} />
      }
    })

    return (
      <ThumbnailContainer>
        {thumbnails}
      </ThumbnailContainer>
    )
  }

  render() {
    return (
      <div className={getBgColor(this.props.order)}>
        <div className="container">
          <div id={this.props.title} className="ptm">
            <h1 className="bold hl">{this.props.title}</h1>
          </div>

          <div className="row">
            <div className="nine columns">
              <FocusItem item={this.findItemData(this.props.items[0])} />
              {this.getThumbnails()}
            </div>
            <div className="three columns">
              <SkillsBar color={getBgColor(this.props.order - 1)} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  findItemData(itemName) {
    if (data[itemName]) return data[itemName]
    else return {}
  }

}
