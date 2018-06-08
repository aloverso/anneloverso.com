import React from 'react';

export default class GridItemSideBySide extends React.Component {

    render() {

        return (
            <div className="row pointer paxs" onClick={this.props.onClick}>
                <div className="row block">
                    <div className="seven columnsf prs constrain">
                        <img src={this.props.img}/>
                    </div>

                    <div className="five columnsf">

                        <div className={`pbs text-ml bold text-${this.props.color}`}>
                            {this.props.title}
                        </div>

                        <div className={`text-${this.props.color}`}>
                        {this.props.snippet}
                        </div>
                    </div>
                </div>

                <div className="block">
                    {this.props.childVisible && this.props.children}
                </div>
            </div>
        )
    }
}