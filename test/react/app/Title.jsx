'use strict';

import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div className="title">
                {this.props.titleText}
            </div>
        );
    }
}

export { Title };
