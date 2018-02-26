
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import Header from './src/components/Header';
import CryptoList from './src/components/CryptoList';

export default class App extends Component {
 
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header />
     <CryptoList />
        </View>
    );
  }
}

