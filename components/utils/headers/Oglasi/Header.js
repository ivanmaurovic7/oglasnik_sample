import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = ({ route }) => {
    return (
        <Text style={HeaderStyle.text}>{route.params.categoryName}</Text>
    )
}

const HeaderStyle = StyleSheet.create({
    text: {
        color: '#a9a9a9',
        fontSize: 18,
        fontWeight: '500'
    }
})

export default Header