import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';

import NavigationTabs from '../utils/NavigationTabs'

const Home = ({ navigation }) => {
    return (
        <View style={HomeStyle.containerWrapper}>
            <View style={HomeStyle.container}>
                <Text style={HomeStyle.text}>Oglasnik</Text>
            </View>
            <NavigationTabs navigation={navigation}/>
        </View>
    )
};

const HomeStyle = StyleSheet.create({
    containerWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333'
    }
}) 

export default Home