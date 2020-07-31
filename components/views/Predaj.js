import React from 'react';
import { View } from 'react-native';

import NavigationTabs from './../utils/NavigationTabs'

const Predaj = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}></View>
            <NavigationTabs navigation={navigation}/>
        </View>
    )
};

export default Predaj