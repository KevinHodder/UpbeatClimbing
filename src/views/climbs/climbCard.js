import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
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
        <Card style={styles.card}>
          <View style={styles.contents}>
            <Text style={styles.title}>{this.props.card.title}</Text>
            <View style={{borderBottomColor: 'black',
    borderBottomWidth: 1, width: '85%'}}/>
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
    marginVertical: 5,
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