import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: '홈',
	tabBarOptions: {
		activeTintColor:'#ed3847',
	},
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
				Platform.OS === 'ios'
					? `ios-home`
					: 'md-home'
			}
        />
	),
};

const CommentStack = createStackNavigator({
	Comt: CommentScreen,
});

CommentStack.navigationOptions = {
	tabBarLabel: '리뷰',
	tabBarOptions: {
		activeTintColor:'#ed3847',
	},
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-brush` : 'md-brush'}
        />
	),
};


const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: '더보기',
	tabBarOptions: {
		activeTintColor:'#ed3847',
	},
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-options` : 'md-options'}
        />
	),
};



export default createBottomTabNavigator({
	HomeStack,
	CommentStack,
	SettingsStack,
});
