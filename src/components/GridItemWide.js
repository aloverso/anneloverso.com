import React from 'react';

export default class GridItemWide extends React.Component {

    render() {
        const bgColor = this.props.color || "black"

        const opacity = this.props.removeOverlay ? '' : 'opacity-m'

        const overlay = this.props.removeOverlay ?
            '' :
            (<div>
                <div className={`overlay bg-${bgColor}`} />
                        <div className={`text-ml bold text-center text-white paxs position-${this.props.alignText}`}>
                    {this.props.title}
                </div>
            </div>)

        return (
            <div className="row paxs pointer" onClick={this.props.onClick}>
                <div className="row">
                    <div className="twelve columnsf constrain overlay-container">
                        <img className={`${opacity} block`} src={this.props.img}/>
                        {overlay}
                    </div>
                </div>

                {this.props.childVisible &&
                    <div className="ptm pad">
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}