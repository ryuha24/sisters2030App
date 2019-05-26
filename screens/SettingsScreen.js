import React from 'react';
import {WebView} from 'react-native';
// import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
        <WebView
            source={{uri: 'http://kkbik.dothome.co.kr/preparing.php'}}
            style={{ flex: 1 }}
        />
    );
  }
}
