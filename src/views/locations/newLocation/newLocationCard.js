import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Icon } from 'native-base';

import MyModal from '../../../components/myModal';
import NewLocationForm from './newLocationForm';

export default class newLocationCard extends Component {

	openButton= (<Button rounded danger
	                     style={styles.addBadge}
	                     onPress={() => {this._child.setModalVisible(true);}}>
									<Icon style={styles.addIcon} type="FontAwesome" name="plus"/>
								</Button>);

	closeButton = (<Button rounded primary
	                       style={styles.closeButton}
	                       onPress={() => {this._child.setModalVisible(false)}}>
									<Text>Save and close</Text>
								</Button>);
	onClose = () => {console.log('on Close action');};

	render() {
		return (
				<MyModal
						ref={(child) => { this._child = child;}}
						open={this.openButton}
						openContainerStyle={styles.addBadge}
				    close={this.closeButton}
				    onClose={this.onClose()}
				>
					<View>
						<Text style={{marginTop: 20, fontSize: 40}}>Add a new location</Text>
						<NewLocationForm></NewLocationForm>
						{this.closeButton}
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
	closeButton: {
		position: 'absolute',
		paddingHorizontal: 10,
		right: 0,
		bottom: 0
	}
});