import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class App extends Component {
	onNavigationStateChange = navState => {
		// Cookie.get('https://www.instagram.com/').then((cookie) => console.log(cookie));
		if (navState.url.indexOf('https://instagram.com') === 0) {
			// const regex = '/?code=(.+)';
			// let accessToken = navState.url.match(regex)[1];
			this.props.navigation.navigate('Main')
			// instaToken(accessToken)
			// 	.then(() => this.props.navigation.navigate('Main'))
		}
	};
	render() {
		// const url = 'https://api.instagram.com/oauth/authorize?client_id=18aaca985faa4ed4861f5ef5e0613dd9&redirect_uri=http://kkbik.dothome.co.kr/success.php&response_type=token';
		const url = 'https://instagram.com'
		return (
			<WebView
				source={{
					uri: url,
				}}
				onNavigationStateChange={this.onNavigationStateChange}
				startInLoadingState
				scalesPageToFit
				javaScriptEnabled
				style={{ flex: 1 }}
			/>
		);
	}
}

