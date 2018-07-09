import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

//Based on https://facebook.github.io/react-native/docs/modal.html

export default class MyModal extends Component {

	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return (
				<View style={{}}>
					<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.modalVisible}
							onRequestClose={() => {this.props.onClose();}}
          >
						<View style={{flex: 1, alignItems: 'center', padding: 10}}>
								{this.props.children}
						</View>
					</Modal>


          {this.props.open}
				</View>
		);
	}
}
