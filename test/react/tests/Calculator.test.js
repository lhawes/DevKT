'use strict';

import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,

} from 'react-dom/test-utils';

import Calculator from '../app/Calculator.jsx';

describe('Calculator', () => {
    it('should render Calculator', () => {
        const component = renderIntoDocument(
            <Calculator />
        );
        const calcEle = findRenderedDOMComponentWithClass(component, 'calculator');
        expect(calcEle).to.be.ok;

    });
});
