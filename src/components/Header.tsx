import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface HeaderProps {
  headerTitle: string;
}

class Header extends Component<HeaderProps> {
  render(): React.ReactNode {
    const { headerTitle } = this.props;
    return (
      <View>
        <Text>{headerTitle}</Text>
      </View>
    );
  }
}

export default Header;
