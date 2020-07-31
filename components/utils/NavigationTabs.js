import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'; 
var {vw, vh, vmin, vmax} = require('react-native-viewport-units');

const NavigationTabs = ({ navigation }) => {
    const iconSize = 23

    const navigationTabsData = [
        {
            to: 'Pretraga',
            icon: <Entypo name="compass" size={iconSize} style={NavigationTabsStyle.icon} />,
            text: 'Pretraga'
        },
        {
            to: 'Moj kutak',
            icon: <Ionicons name="md-person" size={iconSize} style={NavigationTabsStyle.icon} />,
            text: 'Moj kutak'
        },
        {
            to: 'Predaj',
            icon: <AntDesign name="pluscircleo" size={iconSize} style={NavigationTabsStyle.icon} />,
            text: 'Predaj'
        },
        {
            to: 'Favoriti',
            icon: <Entypo name="heart" size={iconSize} style={NavigationTabsStyle.icon} />,
            text: 'Favoriti'
        },
        {
            to: 'Poruke',
            icon: <Entypo name="chat" size={iconSize} style={NavigationTabsStyle.icon} />,
            text: 'Poruke'
        }
    ]

    return (
        <View style={NavigationTabsStyle.navigationTabs}>
            {
                navigationTabsData.map(tab => {
                    return (
                        <TouchableOpacity key={tab.to} onPress={() =>
                            navigation.navigate(tab.to)
                        }>
                            <View style={NavigationTabsStyle.navigationTab}>
                                {tab.icon}
                                <Text style={NavigationTabsStyle.text}>{tab.text}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const NavigationTabsStyle = StyleSheet.create({
    navigationTabs: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      backgroundColor: '#fff',
      width: 100*vw, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-around'
    },
    navigationTab: {
      padding: 5,
      alignItems: 'center'
    },
    icon: {
        color: '#a9a9a9'
    },
    text: {
        color: '#a9a9a9',
        fontSize: 12
    }
})

export default NavigationTabs