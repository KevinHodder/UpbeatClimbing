import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import ClimbCard from './climbCard';
import {observer} from 'mobx-react/native';
// import {Button} from 'native-base';

@observer
export default class CardList extends React.Component {
	constructor(props) {
		super(props);
	}

	unsetActiveLocation() {
		const {stores, navigation} = this.props;
		stores.config.setActiveLocation(null);
		navigation.navigate('Locations');
	}

	render() {
		const {config, remote} = this.props.stores;
		let data = remote.climbs.filter(item => (item.location === config.activeLocation.id));
		return (
		<ImageBackground source={{uri: config.backgroundImage}} style={{width: '100%', height: '100%'}}>
			<View style={{flex: 1}}>
				<View style={styles.listHeader}>
					<TouchableOpacity style={styles.backView} onPress={() => this.unsetActiveLocation()}>
						<Text style={styles.back} >&lt;</Text>
					</TouchableOpacity>
					<Text style={styles.title}>{config.activeLocation.name}</Text>
				</View>
				{ data.length > 0 ?
					<FlatList
						data={data}
						keyExtractor={item => item.title}
						renderItem={({item}) => (<ClimbCard key={item.title} card={item} style={{minHeight: '100%'}} />) }
						numColumns={2}
					/> 
						:
				<View style={styles.emptyTextView}>
					<Text style={styles.emptyText}>No climbs here yet! Add your first now</Text>
					<Text style={styles.emptyText}>Click the Plus button below</Text>
				</View>
				}
			</View>
		</ImageBackground>
		);
	}
}

//

const styles = StyleSheet.create({
	listHeader: {
		flex: 0,
		marginTop: 40,
		minHeight: 60,
	},
	backView:{
		marginTop: 4,
		marginLeft: 10,
		position: 'absolute',
		zIndex: 2
	},
	back: {
		fontSize: 40,
	},
	title: {
		textAlign: 'center',
		fontSize: 50,
		textShadowColor: 'rgba(255, 255, 255, 1)',
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 10,
		marginHorizontal: 30
	},
	cards: {
	},
	emptyText: {
		fontSize: 30,
		textAlign: 'center'
		// color: 'green' //TODO change this to a real colour
	},
	emptyTextView: {
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center'
	}
});