import React, { Component, Image } from 'react';
import logo from '../assets/logo.svg';
import teaching from '../assets/img/teaching.jpg'

import Thumbnail from './Thumbnail';
import ThumbnailContainer from './ThumbnailContainer'

import '../css/App.css';
import '../css/basics.css';

import data from '../data/data.json'

console.log(data)

const catgeorizations = {
  'engineer': [
    'pivotal', 'microsoft', 'red hat', 'congress', 'abortion', 'pianobot', 'raspi'
  ],
  'educator': [
    'consulting', 'insper', 'teaching', 'research', 'schools', 'fourthgrademath'
  ],
  'designer': [
    'ade', 'uocd'
  ],
  'team leader': [
    'ade'
  ],
  'researcher': [
    'research'
  ],
  'creator': [
    'documentary', 'europe', 'iceland'
  ]
}

const roles = Object.keys(catgeorizations)

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      drawersState: roles.reduce((acc, role, i) => {
        acc[i] = role;
        return acc;
      }, {})
    }
  }

  openClose(drawerName) {
    let newDrawers = this.state.drawersState
    newDrawers[drawerName] = !newDrawers[drawerName]
    this.setState({
      drawersState: newDrawers
    })
  }

  keyPressed(event, role) {
    var code = event.keyCode || event.which;
    if (code === 13) {
        this.openClose(role)
    }
  }

  getThumbnails(role) {

    let thumbnails = catgeorizations[role].map((item) => {
      console.log(item, data[item])
      return <Thumbnail imgurl={data[item].imgurl} title={data[item].title} />
    })

    return (
      <ThumbnailContainer>
        {thumbnails}
      </ThumbnailContainer>
    )
  }

  render() {

    let { bg, drawersState } = this.state

    let drawers = roles.map((role,i) => {
      return (
        <div key={i}>
          <div
            className={`pointer bold-focus ${drawersState[role] && 'bold'}`}
            onClick={() => this.openClose(role)}
            tabIndex="0"
            onKeyPress={(event) => this.keyPressed(event, role)}>
              + {role}
          </div>
          {drawersState[role] && this.getThumbnails(role) }
        </div>
      )
    })

    return (
      <div>

        <h1 className="hxl font-btm center">Anne LoVerso</h1>

        <div className="container">
        <div className="container">
          {drawers}
        </div>
        </div>
      </div>
    )
  }

}

export default App;
