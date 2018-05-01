import React, { Component, Image } from 'react';
import logo from '../assets/logo.svg';
import teaching from '../assets/img/wirecutter.jpg'
import coding from '../assets/img/zoo-cropped.png'
import design from '../assets/img/trailer.jpg'
import create from '../assets/img/zermatt-sq.png'
import pairing from '../assets/img/pairing.jpg'
import pivotal from '../assets/img/pivotal.png'

import Thumbnail from './Thumbnail';
import ThumbnailContainer from './ThumbnailContainer'
import Column from './Column'
import Subpage from './Subpage'

import '../css/App.css';
import '../css/basics.css';

import data from '../data/data.json'

console.log(data)

const catgeorizations = {
  'engineer': {
    'projects': [
      'pivotal', 'microsoft', 'red hat', 'congress', 'abortion', 'pianobot', 'raspi'
    ],
    'skills': [
      'full-stack programming',
      'test-driven development',
      'pair progamming',
      'lean/agile/extreme programming',
      'consulting',
      'domain-driven design',
      'java, kotlin, javascript, react, python, spring, git, ruby/rails, matlab'
    ]
  },
  'educator': {
    'projects': [
      'consulting', 'insper', 'teaching', 'research', 'schools', 'fourthgrademath'
    ],
    'skills': [
      'curriculum design',
      'informal peer teaching',
      'communication',
      'educational theory',
      'theories of motivation',
    ]
  },
  'designer': {
    'projects': [
      'ade', 'uocd', 'hmhbga'
    ],
    'skills': [
      'human-centered design',
      'user research',
      'persona generation',
      'user interviews',
      'design thinking',
      'testing and iteration',
      'gathering feedback'
    ]
  },
  'creator': {
    'projects': [
      'documentary', 'europe', 'iceland', 'ahscap'
    ],
    'skills': [

    ]
  }
}

const roles = Object.keys(catgeorizations)

class App extends Component {

  constructor(props) {
    super(props)

    // this.state = {
    //   drawersState: roles.reduce((acc, role, i) => {
    //     acc[i] = role;
    //     return acc;
    //   }, {})
    // }
  }

  // openClose(drawerName) {
  //   let newDrawers = this.state.drawersState
  //   newDrawers[drawerName] = !newDrawers[drawerName]
  //   this.setState({
  //     drawersState: newDrawers
  //   })
  // }
  //
  // keyPressed(event, role) {
  //   var code = event.keyCode || event.which;
  //   if (code === 13) {
  //       this.openClose(role)
  //   }
  // }

  getThumbnails(role) {

    let thumbnails = catgeorizations[role].projects.map((item) => {
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
        <div className="flex-parent flex-nowrap">
          <Column title={"engineer"} skills={catgeorizations['engineer'].skills} img={coding} order={1}/>
          <Column title={"educator"} skills={catgeorizations['educator'].skills} img={teaching} order={2}/>
          <Column title={"designer"} skills={catgeorizations['designer'].skills} img={design} order={3}/>
          <Column title={"creator"} skills={catgeorizations['creator'].skills} img={create} order={4}/>
        </div>

        <div className="container">
          <div className="right hxl pbs font-btm mbxs">Anne LoVerso</div>

          <div className="row">
            <div className="six columns">
              <p className="bold">I write software to solve problems and help people.</p>

              <p>I get excited when I can use software to solve a real problem.
              And I think engineering can be playful, but software is at its most powerful
              when it is developed in a human-centered context.</p>

              <p>I am interested in doing what I love, teaching what I know, and
              learning from those around me to never stop growing.</p>
            </div>

            <div className="five columns text-m">
              <p>Full-stack engineer at <a href="https://pivotal.io/labs/">Pivotal Labs</a></p>
              <p><a href="http://olin.edu/">Olin College</a> alum</p>
              <p>Leader, learner, and listener</p>
            </div>

            <div className="one column text-l front">
              <a href="https://twitter.com/AnneLoVerso">
                <i className="fab fa-twitter-square front"></i>
              </a>
              <a href="https://medium.com/@AnneLoVerso">
                <i className="fab fa-medium"></i>
              </a>
              <a href="www.linkedin.com/in/anneloverso">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/aloverso">
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="pad-space" />

        <div className="container-full">
          <div className="row">
            <div className="six columnsf square">
              <img src={pairing}/>
            </div>

            <div className="six columnsf">
                <div className="six columnsf square bold hm pad">
                  As a software engineer, I work on a variety of consulting projects for Pivotal Labs,
                  modeling and teaching test-driven development to clients through pair programming.

                </div>
                <div className="six columnsf square">
                  <img src={pivotal} />
                </div>
                <div className="six columnsf square bg-square bg-darker text-white hl padded">
                  some text here
                </div>
                <div className="six columnsf square pad">
                  more specific details about what I do
                </div>
            </div>

          </div>
        </div>

      </div>
    )
  }

}

export default App;
