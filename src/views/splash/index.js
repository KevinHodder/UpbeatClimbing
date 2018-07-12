import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import PropTypes from 'prop-types';
import {inject} from 'mobx-react';

@inject("stores")
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {navigation} = this.props;
		setTimeout(() => {navigation.navigate('Locations')}, 1000);
	}

	render() {
		return (
				<View style={styles.page}>
					<View style={styles.textContainer}>
						<Text style={styles.title}>Upbeat Climbing</Text>
					</View>
					<Image
							source={{uri: 'https://northumbriasport.com/uploads/logos/tn_2_57e500e673bae-north---climbing_57e500e673b17.png'}}
					    style={styles.image}
					/>
				</View>
		);
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	image: {
		zIndex: -1,
		flexGrow:1,
		height:null,
		width:null,
		alignItems: 'center',
		justifyContent:'center',
	},
	textContainer: {
		position: 'absolute',
		top: 0, left: 0, right: 0, bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontSize: 60,
		fontWeight: 'bold',
		textShadowColor: 'rgba(0, 0, 0, 1)',
		textShadowOffset: {width: 0, height: 1},
		textShadowRadius: 5,
	}
});