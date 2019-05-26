import React from 'react';
import {WebView} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
	  // const url = 'https://instagram.com'
      <WebView
          source={{
              uri: 'http://kkbik.dothome.co.kr/',
          }}
          style={{ flex: 1 }}
      />
    );
  }
}
