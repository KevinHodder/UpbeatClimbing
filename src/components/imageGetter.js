import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExpo extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
	};

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		} else {
			return (
					<View style={{ flex: 1 }}>
						<Camera style={{ flex: 1 }} type={this.state.type}>
							<View
									style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
								<TouchableOpacity
										style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
										onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
									<Text
											style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
										{' '}Flip{' '}
									</Text>
								</TouchableOpacity>
							</View>
						</Camera>
					</View>
			);
		}
	}
}



// import React from 'react';
// import {Image} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
//
// export default class ImageGetter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
//
// 	render() {
// 		return (
// 			<Image source={this.state.avatarSource}/>
// 	);}
// }
//
// var options = {
// 	title: 'Select Avatar',
// 	customButtons: [
// 		{name: 'fb', title: 'Choose Photo from Facebook'},
// 	],
// 	storageOptions: {
// 		skipBackup: true,
// 		path: 'images'
// 	}
// };
//
// ImagePicker.showImagePicker(options, (response) => {
// 	console.log('Response = ', response);
//
// 	if (response.didCancel) {
// 		console.log('User cancelled image picker');
// 	}
// 	else if (response.error) {
// 		console.log('ImagePicker Error: ', response.error);
// 	}
// 	else if (response.customButton) {
// 		console.log('User tapped custom button: ', response.customButton);
// 	}
// 	else {
// 		let source = { uri: response.uri };
//
// 		// You can also display the image using data:
// 		// let source = { uri: 'data:image/jpeg;base64,' + response.data };
//
// 		this.setState({
// 			avatarSource: source
// 		});
// 	}
// });
