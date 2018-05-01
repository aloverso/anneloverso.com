import React from 'react'

export default class SkillsBar extends React.Component {
  render() {
    return (
      <div className={`${this.props.color} pam mbd`}>
        <div className="bold text-m mbs">
          Skills
        </div>

      Technology proficiency
      <ul>
      <li>Java</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Spring framework</li>
      <li>Python</li>
      <li>Ruby/Rails</li>
      <li>git</li>
      <li>HTML/CSS/Sass</li>

      Familiar with:
      <li>C</li>
      <li>C++</li>
      <li>C#</li>
      <li>ROS</li>
      <li>MATLAB</li>
      </ul>


      </div>
    )
  }
}
