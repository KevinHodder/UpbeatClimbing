import {observable, action} from 'mobx';
import firebase from 'firebase';

export default class RemoteStore {
	@observable authUser = null;

	constructor() {
		firebase.auth().onAuthStateChanged((user) => {
			this.authUser = user;
		});
	}

	@action
	signIn({email,password}) {
		if (this.authUser) {
			return Promise.resolve(this.authUser);
		}
		return firebase.auth().signInWithEmailAndPassword(email,password);
	}
}