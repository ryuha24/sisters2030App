import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import LikesScreen from '../screens/LikesScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import ProfileScreen from '../screens/profile/Profile';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: '별포인트',
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
				Platform.OS === 'ios'
					? `ios-star`
					: 'md-star'
			}
        />
	),
};

const CommentStack = createStackNavigator({
	Comt: CommentScreen,
});

CommentStack.navigationOptions = {
	tabBarLabel: '댓글달기',
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-brush` : 'md-brush'}
        />
	),
};

const LikesStack = createStackNavigator({
	Likes: LikesScreen,
});

LikesStack.navigationOptions = {
	tabBarLabel: '하트받기',
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-heart` : 'md-heart'}
        />
	),
};


const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: '별스토어',
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-link` : 'md-link'}
        />
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: '환경설정',
	tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-options` : 'md-options'}
        />
	),
};

const ProfileStack = createStackNavigator({
	Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
	tabBarLabel: '프로필',
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
	LikesStack,
	LinksStack,
	SettingsStack,
	ProfileStack
});
