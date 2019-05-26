import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ImageBackground,
	Animated,
	TouchableHighlight,
	Linking,
} from 'react-native';

export default class main extends React.Component {
	_InstaLogin () {
		this.props.navigation.navigate('InstaLogin');
		// if(Expo.SecureStore.getItemAsync('_token') == null){
		// 	this.props.navigation.navigate('InstaLogin');
		// }else{
		// 	this.props.navigation.navigate('Main');
		// }
	}

	componentDidMount () {
		this.animate()
	}
	animate () {
		this.animatedValue.setValue(0)
		Animated.timing(
			this.animatedValue,
			{
				toValue: 1,
				duration: 2000,
			}
		).start()
	}
	render() {
		this.animatedValue = new Animated.Value(0)
		const opacity = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0, 1, 1]
		})
		return (

			<ImageBackground
				source={require('../../assets/images/loding-bg.png')}
				imageStyle={{resizeMode: 'stretch'}}
				style={styles.backgroundImg}
			>
				<Animated.View
					style={{
						opacity,
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Image
						style={{
							height: 100,
							width: 120,
							marginBottom: '30%',
						}}
						source={require('../../assets/images/non-logo.png')}/>
					<TouchableHighlight
						onPress={() => {this._InstaLogin()}}
						style ={{
							paddingBottom: 12,
							paddingTop: 12,
							paddingLeft: 50,
							paddingRight: 50,
							borderRadius:4,
							borderWidth:1,
							borderColor:'#fff',
							backgroundColor : "rgba(255,255,255,0)",
							marginBottom :20,
						}}>
						<View style={styles.loginBtn}>
							<Image
								style={{
									width:20,
									height:20,
									marginRight: 10,
								}}
								source={require('../../assets/images/insta-icon.png')}
							/>
							<Text style={{color:'#fff',paddingTop: 2,}}>인스타로 로그인하기</Text>
						</View>
					</TouchableHighlight>
					<Text
						style={{
							backgroundColor: 'rgba(0,0,0,0)',
							textAlign: 'center',
							fontSize: 12,
							color:'#fff',
							marginBottom:30,
						}}
					>
						* 로그인하시는 경우 약관에 동의하시는 것으로 간주합니다.
					</Text>
					<Text style={styles.terms}>Instagram 이용약관</Text>
					<Text style={styles.terms}>PeopleLike 이용약관</Text>
					<View style={styles.loginBottom}>
						<Text style={{
							color:'rgba(255,255,255,0.5)',
							fontSize:12,
						}}>Copyright ⓒ 2018 the PeopleLike All rights reserved.</Text>
					</View>
				</Animated.View>
			</ImageBackground>
		);
	}
}


const styles = StyleSheet.create({
	backgroundImg: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
	loginBtn: {
		flexDirection: 'row',
	},
	terms:{
		marginTop:5,
		color:'#fff',
		fontSize:12,
		fontWeight: 'bold',
	},
	loginBottom:{
		position:'absolute',
		bottom:30,
		left:0,
		right:0,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
