import React from 'react';
import {Dimensions, Image, Platform, Text, TouchableOpacity, WebView} from 'react-native';

export default class CommentScreen extends React.Component {
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
        <Text style={{marginLeft: 10, fontSize:24, fontWeight: 'bold'}}>리뷰</Text>
    ),
    headerRight:(
        <TouchableOpacity onPress={() => navigation.navigate({routeName: 'PriceList'})} style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15, marginRight:10,}}>
          <Image style={{width: 30, height: 30, borderRadius:15,}} source={{uri:'https://instagram.ficn2-1.fna.fbcdn.net/vp/f54eadce17f495e92c8fad5360f58098/5D655586/t51.2885-19/s150x150/11821094_185810741751051_1102813722_a.jpg?_nc_ht=instagram.ficn2-1.fna.fbcdn.net'}}/>
        </TouchableOpacity>
    ),
  };

  render() {
    return (
        <WebView
            source={{uri: 'http://ec2-52-79-228-214.ap-northeast-2.compute.amazonaws.com:3000/campaign/campaignAppReview'}}
            style={{ flex: 1 }}
        />
    );
  }
}
