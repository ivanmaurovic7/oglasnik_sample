import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import {vw, vh, vmin, vmax} from 'react-native-viewport-units';

const Oglasi = ({ route }) => {
    const [DATA, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, switchLoadingState] = useState(false);

    const { categoryId } = route.params;
    
    const fetchData = async () => {
      if(isLoading != true) {
        switchLoadingState(true);

        try {
          let response = await fetch(`http://oglasnik.hr/api/categories/view?id=${categoryId}&page=${page}`);
          let json = await response.json();
          if(json.total > 0) {
            let newData = json.data.oglasi.map(item => {
              if(item.price) {
                return item
              } else {
                let newItem = {...item, price: {
                  main: 'Nedefinirano'
                }}
                return newItem
              }
            })
            window.console.log(newData)
            setData([...DATA, ...newData]);
            setPage(page+1);
          }
          switchLoadingState(false);
        } catch (error) {
          console.error(error);
        }
      }
    }

    useEffect(() => {
      fetchData()
    }, []);

    const otvoriOglas = item => {
      Linking.openURL(item.web_url)
    }

    if(isLoading && DATA.length === 0) {
      return <Text style={{textAlign: 'center', marginTop: 15, fontSize: 17, fontWeight: 'bold', color: '#a9a9a9'}}>Učitavanje...</Text>
    } else if(DATA.length === 0) {
      return <Text style={{textAlign: 'center', marginTop: 15, fontSize: 17, fontWeight: 'bold', color: '#a9a9a9'}}>Nema rezultata pretrage</Text>
    } else {
      return (
        <View style={OglasiStyle.container}>
            <View style={topActionsStyle.actions}>
              <TouchableOpacity style={topActionsStyle.actionContainer}>
                <View style={topActionsStyle.action}>
                  <MaterialIcons name="sort" style={topActionsStyle.icon} size={20} />
                  <Text style={topActionsStyle.text}>Sortiraj</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={topActionsStyle.actionContainer}>
                <View style={topActionsStyle.action}>
                  <MaterialCommunityIcons name="filter" style={topActionsStyle.icon} size={20} />
                  <Text style={topActionsStyle.text}>Filtriraj</Text>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => otvoriOglas(item)}>
                    <View style={OglasiStyle.itemContainer}>
                      <Image source={{uri: 'http://oglasnik.hr'+ item.thumb_pic.src}} style={OglasiStyle.itemImage}></Image>
                      <View style={OglasiStyle.itemInfo}>
                        <Text style={OglasiStyle.itemTitle}>{item.title}</Text>
                        <View style={OglasiStyle.itemPrice}>
                          <Ionicons name="ios-pricetag" style={OglasiStyle.itemPriceIcon} size={16} />
                          <Text style={OglasiStyle.itemPriceText}>{item.price.main}</Text>
                        </View>
                        <Text style={OglasiStyle.itemDate}>{new Date(item.expires_at).toLocaleDateString()}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  )
                }
              }
              onEndReached={fetchData}
            />
        </View>
      )
    }
};

const topActionsStyle = StyleSheet.create({
  actions: {
    width: 100*vw,
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  actionContainer: {
    width: 50*vw,
    padding: 5,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10,
    color: '#a9a9a9'
  },
  text: {
    color: '#a9a9a9'
  }
})

const OglasiStyle = StyleSheet.create({
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemImage: {
    width: 25*vw,
    height: 25*vw,
    borderRadius: 10
  },
  itemInfo: {
    marginLeft: 15,
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#a9a9a9',
    fontSize: 14
  },
  itemPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 15,
    backgroundColor: '#34b191',
    marginTop: 7
  },
  itemPriceIcon: {
    marginLeft: 5,
    color: '#fff',
  },
  itemPriceText: {
    marginRight: 5,
    color: '#fff'
  },
  itemDate: {
    textAlign: 'right',
    marginTop: 5,
    marginRight: 5,
    fontSize: 13,
    color: '#a9a9a9'
  }
}) 

export default Oglasi