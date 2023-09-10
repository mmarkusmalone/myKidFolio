 

import React, {useState, useEffect} from 'react';
import Stocks from './Stocks';
import { AppRegistry } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import MessageGenerator from './index';
import {
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

function PopUps({navigation} : {navigation:any}): JSX.Element {
      const isDarkMode = useColorScheme() === 'dark';
      const [isModalVisible, setModalVisible] = useState(false);
    
      const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    
      return (
        <View style = {styles.container}>
          <Text style= {styles.title}>SMALL STREET JOURNAL</Text>
          <View style = {styles.grayBox}>
            <MessageGenerator/>
          </View>
          <Text style= {styles.emojis}>🚨📣</Text>
        </View>
        );
  }
  
  
  const styles = StyleSheet.create({
        container: {
        marginTop:30,
        padding:2,
        },
        item: {
        backgroundColor: 'gray',
        padding: 40,
        marginVertical: 2,
        marginHorizontal: 2,
        },
        title: {
          fontSize: 32,
        },
        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        },
        modalView: {
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        },
          buttonContainer:{
              position: "absolute",
              bottom: 16,
              right: 16
            },
            emojis:{
              fontSize: 100,
              fontWeight: "bold",
              marginVertical: 30
            },
            boxText:{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
            },
            grayBox: {
              backgroundColor: "#DCEDC8",
              width: 300,
              height:200,
              borderRadius: 10,
              alignItems: "center",
              marginVertical: 40,
            },
            modal: {
              flex:1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            modalText:{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
            },
          //   container: {
          //     flex:1,
          //     justifyContent: "flex-start",
          //     alignItems: "center",
          //     paddingTop: 85,
          //     backgroundColor: '#FFFFCE',
          //   },
          //   title: {
          //     fontSize:32,
          //     fontWeight: "bold",
          //     fontFamily: "LuckiestGuy-Regular",
          //     marginBottom: 2,
          //   },
            sectionContainer: {
              marginTop: 32,
              paddingHorizontal: 24,
              fontFamily: "LuckiestGuy-Regular",
            },
            sectionTitle: {
              fontSize: 24,
              fontWeight: '600',
              fontFamily: "LuckiestGuy-Regular",
            },
            sectionDescription: {
              marginTop: 8,
              fontSize: 18,
              fontWeight: '400',
              fontFamily: "LuckiestGuy-Regular",
            },
            highlight: {
              fontWeight: '700',
              fontFamily: "LuckiestGuy-Regular",
            },
  });
  
  export default PopUps;