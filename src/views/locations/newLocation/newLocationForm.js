import React, {Component} from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import { Container, Item, Text, Form, Input } from 'native-base';


export default class NewLocationForm extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
				<Container style={styles.container}>
					<Text>New Location</Text>
					<Form style={{width: '100%'}}>
						<Text style={styles.label}>Label 1</Text>
						<Item rounded style={styles.formElement}>
							<Input placeholder="Climb shortname"></Input>
						</Item>

						<Text style={styles.label}>Label 1</Text>
						<Item rounded style={styles.formElement}>
							<Input placeholder="Climb shortname"></Input>
						</Item>

						<Text style={styles.label}>Label 1</Text>
						<Item rounded style={styles.formElement}>
							<Input placeholder="Climb shortname"></Input>
						</Item>

						<Text style={styles.label}>Free description</Text>
						<Item style={[styles.formElement, styles.border]}>
							<TextInput placeholder="placeholder " style={{minHeight: 100, width: '100%'}} multiline={true}></TextInput>
						</Item>


					</Form>
				</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		width: '100%',
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