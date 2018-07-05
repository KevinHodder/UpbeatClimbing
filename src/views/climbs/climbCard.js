import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class ClimbCard extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  };


  touchCard = () => {
    console.log(this.props.card.title);
  };

  element = (
      <TouchableOpacity onPress={this.touchCard} style={styles.outerCard}>
        <Card title={this.props.card.title} style={styles.card}>
          <View style={styles.contents}>
            <Text style={styles.description}>
              {this.props.card.description}
            </Text>
            <Image
              style={styles.image}
              source={{uri: this.props.card.imageUrl}}
            />
          </View>
        </Card>
      </TouchableOpacity>
  );

  render() {

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