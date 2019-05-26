import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from '../screens/login/Main';
import MainTabNavigator from './MainTabNavigator';
import InstaTerms from "../screens/login/InstaTerms";

export const RootStack = createStackNavigator({
	Home: {
		screen: Main,
		navigationOptions: {
			header: null,
		}
	},
	Main: {
		screen: MainTabNavigator,
		navigationOptions: {
			header: null
		}
	},
	InstaLogin: {
		screen: InstaTerms,
		navigationOptions: {
			header: null
		}
	},
});