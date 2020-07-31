import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/views/Home'
import Pretraga from './components/views/Pretraga'
import PretragaOglasa from './components/views/PretragaOglasa'
import Oglasi from './components/views/Oglasi'
import MojKutak from './components/views/MojKutak'
import Predaj from './components/views/Predaj'
import Favoriti from './components/views/Favoriti'
import Poruke from './components/views/Poruke'

import PretragaHeader from './components/utils/headers/Pretraga/Header'
import PretragaOglasaLeftHeader from './components/utils/headers/PretragaOglasa/LeftHeader'

import OglasiHeader from './components/utils/headers/Oglasi/Header'
import OglasiRightHeader from './components/utils/headers/Oglasi/RightHeader'

const Stack = createStackNavigator();

const headerTintColor = '#a9a9a9';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Pretraga" component={Pretraga} options={{ headerLeft: null, headerTitle: () => <PretragaHeader/>, headerTintColor }}/>
        <Stack.Screen name="Pretraga oglasa" component={PretragaOglasa} options={({ navigation }) => ({ headerLeft: () => <PretragaOglasaLeftHeader navigation={navigation}/>, headerTintColor })} />
        <Stack.Screen name="Oglasi" component={Oglasi} options={({ route }) => ({ headerTitle: () => <OglasiHeader route={route}/>, headerRight: () => <OglasiRightHeader/>, headerTintColor })} />
        <Stack.Screen name="Moj kutak" component={MojKutak} options={{headerTintColor}} />
        <Stack.Screen name="Predaj" component={Predaj} options={{headerTintColor}} />
        <Stack.Screen name="Favoriti" component={Favoriti} options={{headerTintColor}} />
        <Stack.Screen name="Poruke" component={Poruke} options={{headerTintColor}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;