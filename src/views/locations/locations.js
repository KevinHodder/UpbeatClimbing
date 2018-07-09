import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Icon } from 'native-base';
import CardList from './cardList';
import NewLocationCard from './newLocation/newLocationCard';
// import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
export default class Locations extends React.Component {
  constructor(props) {
    super(props);
  }

  // static propTypes = {
    // onPressLocation: PropTypes.function,
  // };

  // static navigationOptions = ({navigation}) => {
  //   footerRight:
  //       <Button transparent onPress={() => {navigation.navigate('NewClimb')}}>
  //         <Icon name="camera" style={{color: 'white'}}/>
  //         </Button>;
  // }

  addLocation() {
    console.log('adding location');
    const {remote} = this.props.stores;
    remote.addLocation({
      name: 'add Test',
      image: 'https://picsum.photos/200?random',
      id: Math.floor(Math.random()*1000)
    });
  }

  render() {
    const {stores} = this.props;
    return (
      <View style={{width: '100%'}}>
        <CardList style={styles.cardList} {...this.props}></CardList>
        <NewLocationCard/>
      </View>
    );
  }
}

/*
<Button rounded danger style={styles.addBadge} onPress={() => this.addLocation()}>
  <Icon style={styles.addIcon} type="FontAwesome" name="plus"/>
</Button>
*/

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