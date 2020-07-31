import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const PretragaOglasa = ({ route, navigation }) => {
    const [categories, setCategories] = useState([]);
    const { categoryId, topCategoryName } = route.params;

    useEffect(() => {
      (async () => {
        try {
          let response = await fetch(`http://oglasnik.hr/api/categories/index/${categoryId}/children`);
          let json = await response.json();
          setCategories(json.data);
          return json;
        } catch (error) {
          console.error(error);
        }
      })()
    }, []);

    const goToNext = item => {
      if(item.childrenCount === 0) {
        navigation.navigate('Oglasi', { categoryId: item.id, categoryName: item.name })
      } else {
        navigation.push('Pretraga oglasa', { categoryId: item.id, topCategoryName: item.name })
      }
    }

    return (
        <View style={PretragaOglasaStyle.container}>
            <Text style={PretragaOglasaStyle.topCategoryName}>{topCategoryName}</Text>
            <FlatList
              data={categories}
              renderItem={({item}) => 
                <TouchableOpacity onPress={() => goToNext(item)}>
                  <View style={PretragaOglasaStyle.itemContainer}>
                    <Text style={PretragaOglasaStyle.itemText}>{item.name}</Text>
                    <AntDesign style={PretragaOglasaStyle.itemIcon} name="right" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              }
            />
        </View>
    )
};

const PretragaOglasaStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  topCategoryName: {
    fontSize: 16,
    padding: 10,
    color: '#3f99e8',
    fontWeight: 'bold', 
  },
  itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomColor: '#333',
      borderBottomWidth: 1
  },
  itemText: {

  },
  itemIcon: {
    fontSize: 17
  }
}) 

export default PretragaOglasa