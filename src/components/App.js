import React, { Component } from 'react';
import teaching from '../assets/img/wirecutter.jpg'
import coding from '../assets/img/zoo-cropped.png'
import postits from '../assets/img/postits.jpg'

import Column from './Column'

import '../css/App.css';
import '../css/basics.css';

class App extends Component {

    render() {

        return (
            <div>
                <div className="flex-parent flex-nowrap">
                    <Column title={"engineer"} img={coding} color="green" order={1}/>
                    <Column title={"educator"} img={teaching} color="blue" order={2}/>
                    <Column title={"designer"} img={postits} color="purple" order={3}/>
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

                        <div className="one column text-l front mbd">
                            <a href="https://twitter.com/AnneLoVerso">
                                <i className="icon fab fa-twitter-square front" title="twitter" />
                            </a>
                            <a href="https://medium.com/@AnneLoVerso">
                                <i className="icon fab fa-medium" title="medium" />
                            </a>
                            <a href="www.linkedin.com/in/anneloverso">
                                <i className="icon fab fa-linkedin" title="linkedin" />
                            </a>
                            <a href="https://github.com/aloverso">
                                <i className="icon fab fa-github-square" title="github" />
                            </a>
                            <a href="https://github.com/aloverso">
                                <i className="icon fas fa-sticky-note" title="resume" />
                            </a>
                        </div>
                    </div>

                    <div className="hm pbd">A few things I'm proud of</div>

                    <div className="row">
                        <div className="four columns">
                            <ul>
                                <li className="bold text-green">Software consulting at Pivotal Labs</li>
                                <li className="bold text-green">Speaking engagements at local orgs & national tech conferences</li>
                                <li className="bold text-green">Internships at Microsoft & Red Hat</li>
                            </ul>
                        </div>

                        <div className="four columns">
                            <ul>
                                <li className="bold text-blue">Research and publication in the space of education and academic culture</li>
                                <li className="bold text-blue">Designing and constructing a museum exhibit on standardized testing</li>
                                <li className="bold text-blue">Higher-ed consulting in São Paulo, Brazil</li>
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

                    <div className="hm pbd">A few skills I know</div>

                    <div className="row">
                        <div className="four columns">
                            <ul>
                                <li className="text-green">Python, JavaScript, React, Java, Kotlin, Spring framework, git, HTML/CSS</li>
                                <li className="text-green">Dependency inversion, domain-driven design, application architecture patterns</li>
                                <li className="text-green">Pair programming and mob programming</li>
                                <li className="text-green">Test-driven development (incl. JUnit, jasmine, jest, mocha/chai, enzyme, rspec...)</li>
                                <li className="text-green">Agile & Extreme Programming</li>
                            </ul>
                        </div>

                        <div className="four columns">
                            <ul>
                                <li className="text-blue">Curriculum design</li>
                                <li className="text-blue">Teaching and coaching</li>
                                <li className="text-blue">Educational experience design</li>
                                <li className="text-blue">Adapting material to a specific audience</li>
                            </ul>
                        </div>


                        <div className="four columns">
                            <ul>
                                <li className="text-purple">Design thinking</li>
                                <li className="text-purple">User research</li>
                                <li className="text-purple">Persona synthesis</li>
                                <li className="text-purple">Systems analysis</li>
                                <li className="text-purple">Communication & presentation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pad-space"/>

                <div className="hl center">
                    <i className="fas fa-wrench"/> Site under construction! More content soon
                </div>

                <div className="pad-space"/>
            </div>

        )
    }
}

export default App;
