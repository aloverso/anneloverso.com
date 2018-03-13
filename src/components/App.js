import React, { Component, Image } from 'react';
import logo from '../assets/logo.svg';
import teaching from '../assets/img/wirecutter.jpg'
import coding from '../assets/img/coding.png'
import design from '../assets/img/trailer.jpg'
import create from '../assets/img/zermatt-sq.png'

import Thumbnail from './Thumbnail';
import ThumbnailContainer from './ThumbnailContainer'
import Column from './Column'


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

    return (
      <div>
        <div className="flex-parent">
          <Column title={"engineer"} img={coding} />
          <Column title={"educator"} img={teaching} />
          <Column title={"designer"} img={design} />
          <Column title={"creator"} img={create} />
        </div>

        <div className="container">
          <div className="right hxl bold font-btm mbxs">Anne LoVerso</div>

          <div className="row">
            <div className="six columns">
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf
              sadfkjl asdfjl aksdhfkhas dfajsdf asjdhflkadsf

            </div>

            <div className="five columns text-m">
              <p>Engineer at Pivotal Labs</p>
              <p>Olin College alum</p>
            </div>

            <div className="one column text-l front">
              <a href="https://twitter.com/AnneLoVerso">
                <i className="fab fa-twitter-square front"></i>
              </a>
              <a href="https://medium.com/@AnneLoVerso">
                <i className="fab fa-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/anne-loverso-818ab883">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default App;
