import React, {Component, Image} from 'react';
import logo from '../assets/logo.svg';
import teaching from '../assets/img/wirecutter.jpg'
import coding from '../assets/img/zoo-cropped.png'
import design from '../assets/img/trailer.jpg'
import workshop from '../assets/img/workshop.jpg'
import workshopmobile from '../assets/img/folio-mobile/workshop.jpg'
import pairing from '../assets/img/pairing.jpg'
import pivotal from '../assets/img/pivotal.png'
import shiftingrhythms from '../assets/img/shiftingrhythms.png'
import shiftingrhythmsmobile from '../assets/img/folio-mobile/shiftingrhythms.png'

import Thumbnail from './Thumbnail';
import ThumbnailContainer from './ThumbnailContainer'
import Column from './Column'
import Subpage from './Subpage'


import '../css/App.css';
import '../css/basics.css';

import data from '../data/data.json'
import GridItemWide from "./GridItemWide";
import GridItemSideBySide from "./GridItemSideBySide";
import getEducatorBlocks from "./getEducatorBlocks";
import getEngineerBlocks from "./getEngineerBlocks";
import getDesignerBlocks from "./getDesignerBlocks";

console.log(data)

const catgeorizations = {
    'engineer': {
        'projects': [
            {
                key: 'pianobot',
                type: 'sideBySide'
            }, {
                key: 'microsoft',
                type: 'sideBySide'
            }, {
                key: 'red hat',
                type: 'sideBySide'
            }, {
                key: 'congress',
                type: 'sideBySide'
            }, {
                key: 'abortion',
                type: 'sideBySide'
            }, {
                key: 'pianobot',
                type: 'sideBySide'
            }, {
                key: 'raspi',
                type: 'sideBySide'
            }
        ],
        'skills': [
            'full-stack programming',
            'test-driven development',
            'pair progamming',
            'lean/agile/extreme programming',
            'consulting',
            'domain-driven design',
            'java, kotlin, javascript, react, python, spring, git, ruby/rails, matlab'
        ],
        'color': 'green'
    },
    'educator': {
        'projects': [
            'teaching', 'research', 'insper', 'schools', 'fourthgrademath'
        ],
        'skills': [
            'curriculum design',
            'informal peer teaching',
            'communication',
            'educational theory',
            'theories of motivation',
        ],
        'color': 'blue'
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
        ],
        'color': 'purple'
    }
}

const roles = Object.keys(catgeorizations)

class App extends Component {

    constructor(props) {
        super(props)

        // const projectBlocks = roles
        //     .map((role) => catgeorizations[role].projects)
        //     .reduce((acc, val) => acc.concat(val), [])

        this.state = {
          blockOpenStates: {}
        }
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
            return <Thumbnail imgurl={data[item].imgurl} title={data[item].title}/>
        })

        return (
            <ThumbnailContainer>
                {thumbnails}
            </ThumbnailContainer>
        )
    }

    onClick = (projectBlock) => {
        if(this.state.blockOpenStates[projectBlock] === undefined) {
            this.setState((state) => {
                let currentStates = state.blockOpenStates
                currentStates[projectBlock] = true;
                return currentStates
            })
        } else {
            this.setState((state) => {
                let currentStates = state.blockOpenStates
                currentStates[projectBlock] = undefined;
                return currentStates
            })
        }
    }

    render() {

        return (
            <div>
                <div className="flex-parent flex-nowrap">
                    <Column title={"engineer"} img={coding} color="green" order={1}/>
                    <Column title={"educator"} img={teaching} color="blue" order={2}/>
                    <Column title={"designer"} img={design} color="purple" order={3}/>
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
                                <i className="fab fa-twitter-square front" title="twitter" />
                            </a>
                            <a href="https://medium.com/@AnneLoVerso">
                                <i className="fab fa-medium" title="medium"></i>
                            </a>
                            <a href="www.linkedin.com/in/anneloverso">
                                <i className="fab fa-linkedin" title="linkedin"></i>
                            </a>
                            <a href="https://github.com/aloverso">
                                <i className="fab fa-github-square" title="github"></i>
                            </a>
                            <a href="https://github.com/aloverso">
                                <i className="fas fa-sticky-note" title="resume"></i>
                            </a>
                        </div>
                    </div>

                    <div className="pad-space"/>
                    <div className="text-ml pbd">A few things I'm proud of</div>

                    <div className="row">
                        <div className="four columns">
                            <ul>
                                <li className="bold text-green">Software consulting at Pivotal Labs</li>
                                <li className="bold text-green">Internships at Microsoft & Red Hat</li>
                                <li className="bold text-green">Software internships at Microsoft & Red Hat</li>
                            </ul>
                        </div>

                        <div className="four columns">
                            <ul>
                                <li className="bold text-blue">Education research and publication</li>
                                <li className="bold text-blue">Museum exhibit on standardized testing</li>
                                <li className="bold text-blue">Higher-ed consulting in Sao Paulo, Brazil</li>
                            </ul>
                        </div>


                        <div className="four columns">
                            <ul>
                                <li className="bold text-purple">Leading design of a rural mobile makerspace for youth
                                </li>
                                <li className="bold text-purple">Designing pathways to certification for birth support
                                    professionals
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pad-space"/>


                <div className="container-full">
                    <div className="row">

                        <div className="three columns">
                            <div className="square">
                                <img src={pivotal}/>
                            </div>

                            <div className="bg-darker text-white hl padded">
                                some text here
                            </div>
                        </div>

                        <div className="four columns">
                            <p>At Pivotal Labs, we embrace Extreme Programming and my role as a software engineer means
                                that I am teaching, practicing, and modeling techniques like pair-programming and
                                test-driven development all day, every day. I’ve worked with a variety of clients, from
                                large enterprises to startups and nonprofits, and for each project, I’m able to hone my
                                practice of selling Agile, lean practices, user-centered design, and sustainable,
                                maintainable coding.</p>
                            <p>The tech stack of a project is different for each client and their unique needs. I’m a
                                fast learner who’s ready switch from a Java project to a Ruby/Rails project in a day, as
                                I need to not only know, but also teach to our clients. I have significant experience in
                                Java and Kotlin with Spring framework, Python, JavaScript, React, and a variety of
                                front-end tools.</p>
                            <p>Most importantly, besides the technology and technical skills I’ve learned at Pivotal, I
                                am adept at consulting. This is a broad range of skills that include empathy, listening,
                                coaching, and making recommendations with strong opinions backed up by credible
                                reasoning. My favorite part of the job is when my pair challenges me - “why should we do
                                it that way?” I want to always be reminded to question why we do what we do, why we make
                                certain decisions when writing code, and whether I can back up my thoughts with
                                well-reasoned justification.</p>

                        </div>

                        <div className="four columns">
                        </div>

                    </div>
                </div>

                <div className="pad-space"/>

                <div className="container-full">

                    <div className="four columnsf">

                        {getEngineerBlocks(this.onClick, this.state.blockOpenStates)}
                    </div>

                    <div className="four columnsf">
                        {getEducatorBlocks(this.onClick, this.state.blockOpenStates)}
                    </div>

                    <div className="four columnsf">
                        {getDesignerBlocks(this.onClick, this.state.blockOpenStates)}
                    </div>
                </div>
            </div>

        )
    }
}

export default App;
