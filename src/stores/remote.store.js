import {observable, action} from 'mobx';
import firebase from 'firebase';

export default class RemoteStore {
	locations = observable.array([
		{
			name: 'Undercover Rock',
			image: 'https://picsum.photos/200?random',
			id: 1
		},
		{
			name: 'The Climbing Academy',
			image: 'https://picsum.photos/200?random',
			id: 2
		},
		{
			name: 'Bloc',
			image: 'https://picsum.photos/200?random',
			id: 3
		},
		{
			name: 'Red Point',
			image: 'https://picsum.photos/200?random',
			id: 4
		},
	]);

	climbs = observable.array([
		{
			title: 'title1',
			description: 'Very Easy',
			imageUrl: 'https://picsum.photos/200?random',
			location: 1
		}	,
		{
			title: 'Title2',
			description: 'Very Hard',
			imageUrl: 'https://picsum.photos/200?random',
			location: 1
		},
		{
			title: 'Title3',
			description: 'Moderately Hard',
			imageUrl: 'https://picsum.photos/200?random',
			location: 2
		},
		{
			title: 'Title4',
			description: 'card with a very long title to cause overflow',
			imageUrl: 'https://picsum.photos/200?random',
			location: 3
		},
		{
			title: 'Title5',
			description: 'emphasise scrolling',
			imageUrl: 'https://picsum.photos/200?random',
			location: 1
		}
	]);

	addLocation(location) {
		this.locations.push(location);
	}

	addClimb(climb) {
		this.climbs.push(climb);
	}
}