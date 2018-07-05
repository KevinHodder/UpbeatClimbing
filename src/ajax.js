const apiHost = 'https://somewhere.com';

export default {
	async fetchLocation() {
		try {
			let response = await fetch('');
			let responseJson = await response.json();
			return responseJson;
		} catch (error) {
			console.error('bad thing happened', error);
		}
	}
}