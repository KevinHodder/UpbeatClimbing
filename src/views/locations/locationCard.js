import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
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
        <Card style={styles.card} >
          <View style={styles.contents}>
            <Text style={styles.title}>{this.props.card.name}</Text>
            <View style={{borderBottomColor: 'black',
    borderBottomWidth: 1, width: '85%'}}/>
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
    padding: 10
  },
	card: {
		height: '100%',
    padding: 5,
    paddingBottom: 10
	},
  contents: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 3,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    flexShrink: 0,
    textAlign: 'center',
    // marginVertical: 5,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.5
  }
});