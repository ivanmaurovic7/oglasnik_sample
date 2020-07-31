import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Header = () => {
    return (
        <View style={HeaderStyle.container}>
            <AntDesign name="search1" size={20} style={HeaderStyle.icon}/>
            <TextInput
            style={HeaderStyle.input}
            placeholder="Pretraga"
            />
        </View>
    )
}

const HeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    icon: {
      color: '#a9a9a9'
    },
    input: {
        height: 40, 
        padding: 10, 
        flex: 1, 
        marginLeft: 15
    }
})

export default Header