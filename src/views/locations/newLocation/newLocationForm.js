import React, {Component} from 'react';
import { View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Container, Item, Text, Form, Input } from 'native-base';
// import { RNCamera } from 'react-native-camera';
import ExpoCamera from '../../../components/imageGetter';

export default class NewLocationForm extends Component {
	constructor(props){
		super(props);
	}

	getFormData = () => {return this.state};
	resetFormData = () => {return this.setState(state => ({}))};

	render() {
		return (
			<KeyboardAwareScrollView
					resetScrollToCoords={{ x: 0, y: 0 }}
					contentContainerStyle={styles.container}
					scrollEnabled={false}
			>
				<Form style={styles.container}>
					<Text style={styles.label}>Name</Text>
					<Item rounded style={styles.formElement}>
						<Input placeholder="E.g. Happy Place Climbing" onChangeText={(text) => this.setState({name: text})}></Input>
					</Item>

					<Text style={styles.label}>Description</Text>
					<Item style={[styles.formElement, styles.border]}>
						<TextInput placeholder="Free text" style={{minHeight: 100, width: '100%'}} multiline={true} onChangeText={(text) => this.setState({description: text})}></TextInput>
					</Item>

					<ExpoCamera></ExpoCamera>

					<View style={{height: 10}}></View>
				</Form>
			</KeyboardAwareScrollView>
		);
	}
}

// <RNCamera
// 		ref={ref => {
//               this.camera = ref;
//             }}
// 		style = {styles.preview}
// 		type={RNCamera.Constants.Type.back}
// 		flashMode={RNCamera.Constants.FlashMode.on}
// 		permissionDialogTitle={'Permission to use camera'}
// 		permissionDialogMessage={'We need your permission to use your camera phone'}
// />

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		width: '100%',
		flex: 1
		// height: 200,
		// backgroundColor: 'green'
	},
	label: {
		margin: 5,
	},
	formElement: {
		width: '100%',
	},
	border: {
		borderColor: 'black'
	},
	description: {
		minHeight: 30,
		width: '100%'
	}
});