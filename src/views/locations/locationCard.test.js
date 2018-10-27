import React from 'react';
import renderer from 'react-test-renderer';

import LocationCard from './locationCard';

test('renders correctly', () => {
	let item = {
		name: 'Test Title',
		image: 'image_url',
		id: 15
	};
	
	const element = renderer.create(<LocationCard key={item.id} card={item} />);
	console.log('thing',element);
	expect(element).toBeTruthy();
});