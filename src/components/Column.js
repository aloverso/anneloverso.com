import React from 'react';

export default class Column extends React.Component {

  render() {
    return (
      <div className="flex-child">
        <div className="header-role">
          <div className={`hl font-btm plxs bold text-white opacity-full`}>
              {this.props.title}
            <div className={`overlay opacity-m bg-${this.props.color}`}/>
          </div>
        </div>
        <img src={this.props.img} className={`header-img`} alt={this.props.title}/>
      </div>
    )
  }
}
