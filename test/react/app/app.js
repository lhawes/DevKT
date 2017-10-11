'use strict';

import React, { Component } from 'react';
import Title from './Title.jsx';
import Simple from './Simple.jsx';
import Calculator from './Calculator.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Title />
                <Simple />
                <Calculator />
            </div>
        );
    }
}

export default App;
