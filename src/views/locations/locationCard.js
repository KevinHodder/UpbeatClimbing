import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';


export default class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
    card: PropTypes.object.isRequired,
  };

  setActiveLocation() {
    let {config} = this.props.stores;
    console.log('setting active location');
    config.setActiveLocation(this.props.card);
    this.navigateToClimbs();
  }

  navigateToClimbs() {
    this.props.navigation.navigate('Climbs');
  }

  element = (
      <TouchableOpacity style={styles.outerCard} onPress={this.setActiveLocation.bind(this)}>
        <Card title={this.props.card.name} style={styles.card} >
          <View style={styles.contents}>
            <Text style={styles.description}>
              {this.props.card.description}
            </Text>
            <Image
              style={styles.image}
              source={{uri: this.props.card.image}}
            />
          </View>
        </Card>
      </TouchableOpacity>
  );

  render() {
    console.log()
    return this.element;
  }
}

const styles = StyleSheet.create({
  outerCard: {
    width: '50%',
  },
	card: {
		backgroundColor: 'yellow',
		height: '100%',
	},
  contents: {
    alignItems: 'center',
  },
  description: {
    flex: 0,
    textAlign: 'center',
    marginVertical: 5,
    width: '100%',

  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});