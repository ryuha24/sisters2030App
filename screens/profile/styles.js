import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

let headerMargin = window.height/8;

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: headerMargin,
  },
  mainProfile: {
    width: '100%',
    backgroundColor: '#e2e2e2',
    alignItems: 'center',
  },
  profileImageContainer: {
    marginTop: window.height/28,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  profileImage: {
    width: window.width/3,
    height: window.width/3,
    borderRadius: window.width/6,
  },
  profileNameStyle: {
    marginTop: window.height/56,
    marginBottom: window.height/56,
    color: '#777777',
    fontSize: 24,
    fontWeight: '400'
  },
  subProfileContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 20,
    fontWeight: '300'
  },
  // caloriesBox: {
  //   width: '100%',
  //   height: 150,
  //   marginBottom: 10,
  //   backgroundColor: '#DEDEDE'
  // },
  // recentExercises: {
  //   width: '100%',
  //   height: 150,
  //   marginBottom: 10,
  //   backgroundColor: '#DEDEDE'
  // },
  // monthly: {
  //   width: '100%',
  //   height: 150,
  //   marginBottom: 10,
  //   backgroundColor: '#DEDEDE'
  // },
  // recommendation: {
  //   width: '100%',
  //   height: 150,
  //   marginBottom: 10,
  //   backgroundColor: '#DEDEDE'
  // }
});