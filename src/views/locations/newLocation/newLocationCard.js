import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Icon } from 'native-base';
import {inject, observer} from 'mobx-react';

import MyModal from '../../../components/myModal';
import NewLocationForm from './newLocationForm';

@inject('stores')
export default class newLocationCard extends Component {
	constructor(props) {
		super(props);
	}

	openButton= (<Button rounded danger
	                     style={styles.addBadge}
	                     onPress={() => {this._child.setModalVisible(true);}}>
									<Icon style={styles.addIcon} type="FontAwesome" name="plus"/>
								</Button>);

	closeButton = (<Button rounded primary
	                       style={styles.closeButton}
	                       onPress={() => {this.saveAndClose();}}>
									<Text>Save and close</Text>
								</Button>);
	cancelButton = (<Button rounded danger
	                        style={styles.cancelButton}
	                        onPress={() => {this._child.setModalVisible(false);}}>
									<Text>Cancel</Text>
								</Button>)

	saveAndClose = () => {
		console.log('saving with data', this._form.state);
		let formData = this._form.state;
		const {remote} = this.props.stores;
		remote.addLocation({
			...formData,
			id: Math.floor(Math.random()*1000),
		});
		this._child.setModalVisible(false);
	}

	onClose = () => {console.log('on Close action');};

	render() {
		return (
				<MyModal
						ref={(child) => { this._child = child;}}
						open={this.openButton}
						openContainerStyle={styles.addBadge}
				    close={this.closeButton}
				    onClose={this.onClose}
				>
						<Text style={{marginTop: 20, fontSize: 40}}>Add a new location</Text>
						<NewLocationForm ref={(ref) => this._form = ref}></NewLocationForm>
					<View style={styles.buttonContainer}>
						{this.closeButton}
						{this.cancelButton}
					</View>
				</MyModal>
		);
	}
}

const styles = StyleSheet.create({
	addBadge: {
		position: 'absolute',
		bottom: '10%',
		marginBottom: 20,
		right: '8%',
		zIndex: 2,
	},
	addIcon: {
		fontSize: 30
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 0,
		paddingVertical: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	closeButton: {
		paddingHorizontal: 10,
		marginRight: 8,
	},
	cancelButton: {
			paddingHorizontal: 10,
	}
});