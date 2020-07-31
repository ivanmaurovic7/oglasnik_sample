import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const RightHeader = ({ route }) => {
    return (
        <TouchableOpacity>
            <AntDesign name="search1" size={20} style={RightHeaderStyle.icon}/>
        </TouchableOpacity>
    )
}

const RightHeaderStyle = StyleSheet.create({
    icon: {
        color: '#a9a9a9',
        marginRight: 15
    },
})

export default RightHeader