import React from 'react';
import {WebView} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <WebView
            source={{uri: 'http://kkbik.dothome.co.kr/preparing.php'}}
            style={{ flex: 1 }}
        />
    );
  }
}