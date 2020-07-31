import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';

import NavigationTabs from './../utils/NavigationTabs'

const Pretraga = ({ navigation }) => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
      try {
        let response = await fetch('http://oglasnik.hr/api/categories/index/1/children', {
          mode: 'no-cors'
        });
        let json = await response.json();
        setCategories(json.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      getCategories()
    }, []);

    return (
        <View style={{flex: 1}}>
            <ScrollView style={PretragaStyle.containerWrapper}>
              <View style={PretragaStyle.container}>
                {
                categories.map(cat => {
                    return (
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Pretraga oglasa', { categoryId: cat.id, topCategoryName: cat.name })
                    }>
                      <View style={PretragaStyle.imageContainer}>
                        <View style={PretragaStyle.imageOverlay}></View>
                        <Image source={{uri: 'https://oglasnik.hr' + cat.image_data.path_root}} style={PretragaStyle.image}></Image>
                        <Text style={PretragaStyle.imageText}>{cat.name}</Text>
                      </View>
                    </TouchableOpacity>
                    )
                })
                }
              </View>
            </ScrollView>
            <NavigationTabs navigation={navigation}/>
        </View>
    )
};

const PretragaStyle = StyleSheet.create({
  containerWrapper: {
    height: 0,
    width: 100*vw
  },
  container: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginTop: 5, 
    justifyContent: 'center', 
    paddingBottom: 80
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    margin: 3, 
    width: 46*vw, 
    height: 25*vw,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    width: 46*vw,
    height: 25*vw,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageText: {
    zIndex: 2,
    fontWeight: 'bold', 
    color: '#fff', 
    fontSize: 14
  },
  imageOverlay: {
    zIndex: 1,
    position: 'absolute',
    width: 46*vw,
    height: 25*vw,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}) 

export default Pretraga