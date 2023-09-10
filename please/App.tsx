/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import Stocks from './Stocks';
import PopUps from './PopUps';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import MessageGenerator from './index';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
  FlatList,
  TextInput,
  Modal,
  Pressable,
  TouchableOpacity
} from 'react-native';

const Stack = createNativeStackNavigator();
AppRegistry.registerComponent('please', () => Navigator);

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stocks">
        <Stack.Screen name="Stocks" component={Stocks} />
        {/* <Stack.Screen name="Saves" component={Stocks} /> */}
        {/* <Stack.Screen name="Begin" component={Stocks} /> */}
        <Stack.Screen name="PopUps" component={PopUps} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;