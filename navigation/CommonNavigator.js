import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from '../screens/login/Main';
import MainTabNavigator from './MainTabNavigator';
import InstaTerms from "../screens/login/InstaTerms";
import InstaCheck from "../screens/login/InstaCheck";

export const RootStack = createStackNavigator({
	//login하는 가장 첫 화면
	Home: {
		screen: Main,
		navigationOptions: {
			header: null,
		}
	},
	// 회원가입 화면
	Join: {
		screen: InstaTerms,
		navigatorStyle: {
			navBarHidden: false,
		},
		navigationOptions: {
			title:'회원가입',
			headerTintColor:'#000',
		}
	},
	// 인스타 확인하는 화면
	InstagramCheck: {
		screen: InstaCheck,
		navigatorStyle: {
			navBarHidden: false,
		},
		navigationOptions: {
			title:'인스타 아이디 확인',
			headerTintColor:'#000',
		}
	},
	// 이제 본격 메인 화면
	Main: {
		screen: MainTabNavigator,
		navigationOptions: {
			header: null
		}
	},
},
{
	// initialRouteName: Expo.SecureStore.getItemAsync('userInfo') ? "Main" : "Home"
});