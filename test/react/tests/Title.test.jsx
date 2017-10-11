'use strict';

import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,

} from 'react-dom/test-utils';

import { Title } from '../app/Title.jsx';

describe('Title', () => {
	it('should render a div with "title" class', () => {
		const titleText = 'some text';
		const component = renderIntoDocument(
			<Title
				titleText={ titleText }
			/>
		);
		const titleEl = findRenderedDOMComponentWithClass(component, 'title');
		expect(titleEl).to.be.ok;
		expect(component.props.titleText).to.be.equal(titleText);
	});
});
