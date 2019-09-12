import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../components/Header';

class Home extends Component {
  render(): JSX.Element {
    const titleText = 'Hello, world!';
    return (
      <View>
        <Header headerTitle={'Home Screen'} />
        <Text>{titleText}</Text>
      </View>
    );
  }
}

export default Home;
