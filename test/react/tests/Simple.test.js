'use strict';

import { expect } from 'chai';
import { describe, it } from 'mocha';

import Simple from '../app/Simple.jsx';

describe('Simple', () => {
    it('should render a div with "Hello World as text', () => {
        const text = 'Hello World';
        const component = Simple;

        expect(component.props.children).to.be.equal(text);
    });
});
