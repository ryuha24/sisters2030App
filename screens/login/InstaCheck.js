import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView,Platform,ImageBackground,Image} from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {

	check = () => {
		Alert.alert('ok');
	};
	render() {
		const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0;
		return (

			<ScrollView style={styles.root} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
				<View style={styles.content}>
					<ImageBackground source={{uri:'https://scontent-hkg3-1.cdninstagram.com/vp/6ec19f746931590616d3b2b23e163d93/5D872542/t51.2885-19/s320x320/22580390_509743359392165_7072970572757467136_n.jpg?_nc_ht=scontent-hkg3-1.cdninstagram.com'}} imageStyle={{borderRadius: 50}} style={styles.profileImg}/>
					<Text style={styles.instaNick}>k__james__</Text>
					<View style={styles.flexView}>
						<View style={styles.flexViewIn}>
							<Text style={{textAlign:'center'}}>
								게시물
								<Text style={{fontWeight:'bold'}}> 79</Text>
							</Text>
						</View>
						<View style={styles.flexViewIn}>
							<Text style={{textAlign:'center'}}>
								팔로워
								<Text style={{fontWeight:'bold'}}> 79</Text>
							</Text>
						</View>
						<View style={styles.flexViewIn}>
							<Text style={{textAlign:'center'}}>
								팔로우
								<Text style={{fontWeight:'bold'}}> 79</Text>
							</Text>
						</View>
					</View>
					<View style={styles.textBottom}>
						<View style={styles.textBottomView}><Text style={styles.textBottom_title}>회원정보</Text></View>
						<View style={styles.textBottomViewBorder}>
							<View style={styles.bottomBox}>
								<View style={{flex:1,flexDirection: 'row', alignContent:'stretch',}}>
									<View><Image style={styles.icons} source={require('../../assets/images/icons8-name-32.png')}></Image></View>
									<View style={{paddingTop:2,}}>
										<Text style={styles.bottomWrap}>
											<Text style={styles.bottomText}> 아이디</Text>
										</Text>
									</View>
								</View>
								<View style={{alignItems: 'flex-end',paddingTop:2,}}>
									<Text style={{color:'#fff', fontWeight:'bold'}}>GetId</Text>
								</View>
							</View>
							<View style={styles.bottomBox}>
								<View style={{flex:1,flexDirection: 'row', alignContent:'stretch',}}>
									<View><Image style={styles.icons} source={require('../../assets/images/icons8-badge-32.png')}></Image></View>
									<View style={{paddingTop:2,}}>
										<Text style={styles.bottomWrap}>
											<Text style={styles.bottomText}> 닉네임</Text>
										</Text>
									</View>
								</View>
								<View style={{alignItems: 'flex-end'}}>
									<Text style={{color:'#fff', fontWeight:'bold'}}>GetNickName</Text>
								</View>
							</View>
							<View style={styles.bottomBox}>
								<View style={{flex:1,flexDirection: 'row', alignContent:'stretch',}}>
									<View><Image style={styles.icons} source={require('../../assets/images/icons8-instagram-50.png')}></Image></View>
									<View style={{paddingTop:2,}}>
										<Text style={styles.bottomWrap}>
											<Text style={styles.bottomText}> 인스타 아이디</Text>
										</Text>
									</View>
								</View>
								<View style={{alignItems: 'flex-end'}}>
									<Text style={{color:'#fff', fontWeight:'bold'}}>GetInstaId</Text>
								</View>
							</View>
						</View>
						<View style={styles.textBottomView}><Text style={styles.textBottomIn}>회원님의 인스타그램 및 정보가 맞습니까?</Text></View>
					</View>
				</View>
				<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
					<View style={styles.footer}>
						<TouchableOpacity
							style={styles.footerBtnWrap}
							onPress={this.check}
						>
							<Text style={styles.footerBtn}>완료</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>

		);
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		width:'100%',
		padding: 20,
	},
	profileImg:{
		marginTop:30,
		width: 100,
		height: 100,
	},
	instaNick: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 20,
	},
	flexView: {
		flexDirection: 'row',
		alignContent:'stretch',
		width: '100%',
	},
	flexViewIn: {
		flex:1,
		textAlign: 'center',
	},
	textBottom: {
		width:'100%',
		borderRadius: 6,
		backgroundColor:'#ed3847',
		color:'#fff',
		margin:20,
		padding:20,
		flexDirection: 'column',
		alignItems: 'stretch',
	},

	bottomBox: {
		flexDirection: 'row',
		marginBottom:5,
	},
	textBottomView: {
		width: '100%',
		marginBottom: 18,
	},
	textBottomViewBorder: {
		width: '100%',
		marginBottom: 15,
		borderWidth:1,
		borderColor:'#fb606d',
		borderStyle: "dashed",
		padding:15,
	},
	textBottom_title: {
		width: '100%',
		fontSize: 18,
		color:'#fff',
		fontWeight:'bold',
	},
	textBottomIn: {
		width: '100%',
		color:'#fff',
	},
	bottomWrap: {
		position:'relative'
	},
	icons: {
		width:20,
		height:20,
	},
	bottomText: {
		textAlign:'left',
		fontSize:15,
		color:'#fff',
	},
	footer: {
		position:'absolute',
		left:0,
		right:0,
		bottom:0,
	},
	footerBtnWrap:{
		width:'100%',
		backgroundColor:'#F2D902',
	},
	footerBtn: {
		width: '100%',
		fontSize:15,
		fontWeight:'600',
		textAlign:'center',
		color:'#391D1D',
		padding:16,
		height:50,
	},
});
