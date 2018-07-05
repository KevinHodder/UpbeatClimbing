import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import LocationCard from './locationCard';
import {observer} from 'mobx-react/native';

@observer
export default class CardList extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const HeaderText = 'Locations';
		const {config, remote} = this.props.stores;
		return (
		<ImageBackground source={{uri: config.backgroundImage}} style={{width: '100%', height: '100%'}}>
			<View style={{height: '100%'}}>
				<View style={styles.listHeader}>
					<Text style={styles.title}>{HeaderText}</Text>
				</View>
				{ remote.locations.length > 0 ?
						<FlatList
								data={remote.locations.slice()}
								keyExtractor={item => item.id}
								renderItem={({item}) => (<LocationCard key={item.id} card={item} style={{minHeight: '100%'}} {...this.props}/>) }
								numColumns={2}
						/>
						:
						<View style={styles.emptyTextView}>
							<Text style={styles.emptyText}>Lets add your first location</Text>
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
		color: 'green' //TODO change this to a real colour
	},
	emptyTextView: {
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center'
	}
});