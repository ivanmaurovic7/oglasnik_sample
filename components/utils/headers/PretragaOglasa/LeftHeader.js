import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

const LeftHeader = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <EvilIcons name="close" size={30} style={LeftHeaderStyle.icon}/>
        </TouchableOpacity>
    )
}

const LeftHeaderStyle = StyleSheet.create({
    icon: {
      marginLeft: 12,
      marginTop: 2,
      color: '#a9a9a9'
    }
})

export default LeftHeader