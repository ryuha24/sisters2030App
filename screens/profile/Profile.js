import React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import { ImagePicker, Permissions } from 'expo';

import { styles } from './styles';
import {updateData} from '../../data/action';

class Profile extends React.Component {
    state = {
        image: 'https://i.imgur.com/x7wdEtJ.jpg',
    };
    render() {
        return (
        <View style={styles.scrollContainer}>
            <StatusBar barStyle="dark-content"/>

            <View style={styles.mainProfile}>

                <Text style={styles.profileNameStyle}>
                    {this.props.appData.user.nickname}
                </Text>
            </View>

            <View style={styles.subProfileContainer}>
                <Text style={styles.profileText}>
                    {this.props.appData.user.email}
                </Text>
                <Text style={styles.profileText}>
                    {this.props.appData.user.nickname}
                </Text>
            </View>
        </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        appData: state.data
    };
}

function mapDispatchToProps (dispatch) {
    return {
        updateData: (data) => dispatch(updateData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);