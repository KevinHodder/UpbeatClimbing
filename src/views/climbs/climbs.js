import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Icon } from 'native-base';
import CardList from './cardList';
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
export default class Climbs extends React.Component {
  constructor(props) {
    super(props);
  }
  
  addClimb() {
    console.log('adding climb');
    const {config, remote} = this.props.stores;
    // TODO replace content with actual
    remote.addClimb({
      title: 'Title'+Math.floor(Math.random()*1000),
      description: 'new thing',
      imageUrl: 'https://picsum.photos/200?random',
      location: config.activeLocation.id
    });
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        <CardList style={styles.cardList} {...this.props}></CardList>
        <Button rounded danger style={styles.addBadge} onPress={() => this.addClimb()}>
          <Icon style={styles.addIcon} type="FontAwesome" name="plus"/>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardList: {
    // justifyContent: 'space-around'
  },
  addBadge: {
    position: 'absolute',
    bottom: '5%',
    right: '8%',
    zIndex: 2,
  },
  addIcon: {
    fontSize: 30
  }
});