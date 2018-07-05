import firebase from 'firebase';
import {observable, action} from 'mobx';

var firebaseConfig = {
	apiKey: "AIzaSyCphvksWYXMqnKlyRd13yP04mqHhEtzBow",
	authDomain: "upbeat-climbing.firebaseapp.com",
	databaseURL: "https://upbeat-climbing.firebaseio.com",
	projectId: "upbeat-climbing",
	storageBucket: "upbeat-climbing.appspot.com",
	messagingSenderId: "689254850946"
};

export default class ConfigStore {

	@observable activeLocation = '';

	constructor() {
		firebase.initializeApp(firebaseConfig);
		this.testVariable = 17;
		this.activeClimb = null;
		this.host = 'http://google.com';
		this.backgroundImage = 'https://picsum.photos/600?random';
	}

	get ActiveLocation() {
		return this.activeLocation;
	}

	setActiveLocation = (id) => {
		this.activeLocation = id;
	}

	get ActiveClimb() {
		return this.activeClimb;
	}

	get Host() {
		return this.host;
	}

	get TestVariable() {
		return this.testVariable;
	}
}