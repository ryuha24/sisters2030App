import React from 'react';
import axios from 'axios';
import {WebView,TouchableOpacity,Image,Platform,Dimensions,Text} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import {connect} from "react-redux";
import {InstaCheck} from "./login/InstaCheck";

export default class HomeScreen extends React.Component {
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
          <Text style={{marginLeft: 10, fontSize:24, fontWeight: 'bold'}}>셀럽들의 놀이터</Text>
      ),
      headerRight:(
      <TouchableOpacity onPress={() => navigation.navigate({routeName: 'PriceList'})} style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15, marginRight:10,}}>
          <Image style={{width: 30, height: 30, borderRadius:15,}} source={{uri:'https://instagram.ficn2-1.fna.fbcdn.net/vp/f54eadce17f495e92c8fad5360f58098/5D655586/t51.2885-19/s150x150/11821094_185810741751051_1102813722_a.jpg?_nc_ht=instagram.ficn2-1.fna.fbcdn.net'}}/>
      </TouchableOpacity>
      ),
  };


    render() {
    return (
	  // const url = 'https://instagram.com'
      <WebView
          source={{
              uri: 'http://ec2-52-79-228-214.ap-northeast-2.compute.amazonaws.com:3000/campaign/campaignList',
          }}
          style={{ flex: 1 }}
      />
    );
  }
}
