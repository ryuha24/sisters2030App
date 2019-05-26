import React,{Component} from 'react';
import {Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
// import { ExpoConfigView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff',
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
      borderBottomWidth: 0,
      marginTop:15,
      paddingBottom:15,
    },
    headerLeft: (
        <Text style={{marginLeft: 10, fontSize:24, fontWeight: 'bold'}}>더보기</Text>
    ),
    headerRight:(
        <TouchableOpacity onPress={() => navigation.navigate({routeName: 'PriceList'})} style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15, marginRight:10,}}>
          <Image style={{width: 30, height: 30, borderRadius:15,}} source={{uri:'https://instagram.ficn2-1.fna.fbcdn.net/vp/f54eadce17f495e92c8fad5360f58098/5D655586/t51.2885-19/s150x150/11821094_185810741751051_1102813722_a.jpg?_nc_ht=instagram.ficn2-1.fna.fbcdn.net'}}/>
        </TouchableOpacity>
    ),
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
        <View style={{flex:1, flexDirection: 'column',}}>
          <View style={{height:300, backgroundColor:'#fff', flexDirection:'column'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, height: 100, borderWidth: 1, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="md-megaphone" size={24} color="#454545" />
                <Text style={styles.iconTitle}>공지사항</Text>
              </View>
              <View style={{flex: 1, height: 100, borderWidth: 0.5, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="ios-paper-plane" size={24} color="#454545" />
                <Text style={styles.iconTitle}>커뮤니티</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, height: 100, borderWidth: 0.5, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="md-information-circle-outline" size={24} color="#454545" />
                <Text style={styles.iconTitle}>FAQ</Text>
              </View>
              <View style={{flex: 1, height: 100, borderWidth: 0.5, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="logo-usd" size={24} color="#454545" />
                <Text style={styles.iconTitle}>출금신청</Text>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, height: 100, borderWidth: 0.5, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="md-laptop" size={24} color="#454545" />
                <Text style={styles.iconTitle}>1:1문의</Text>
              </View>
              <View style={{flex: 1, height: 100, borderWidth: 0.5, borderColor: '#ebebeb',justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="md-log-out" size={24} color="#454545" />
                <Text style={styles.iconTitle}>로그아웃</Text>
              </View>
            </View>
          </View>
          <View style={{flex:1,alignItems: "center", marginTop:30,}}>
            <View style={{alignItems: "center",}}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.footerTitle}>이용약관</Text>
                <Text style={styles.footerTitle}>개인정보처리방침</Text>
                <Text style={styles.footerTitle}>운영정책</Text>
              </View>
              <Text style={{marginTop:20, color: '#444',}}>© 2030sisters 000-0000</Text>
              <Text style={{marginTop:3, color: '#444',}}>Ver 0.043 [배타버전]</Text>
            </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  iconTitle: {
    color:'#898989',
    marginTop:10,
  },
  footerTitle: {
    color:'#9d9d9d',
    paddingLeft:10,
    paddingRight:10,
  }
});