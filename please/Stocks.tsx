import React, {useState, useEffect} from 'react';
import Navigator from './App';
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

var startMon = 1000;
var incrementer = startMon/50;
var totals = [0,0,0,0,0,0,0,0,0,0];


interface ItemData {
  id: number;
  title: string;
  image: string;
  blurb: string;
  money: number;
}

const DATA: ItemData[] = [
  {
    id: 0,
    title: 'Pear',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/pear.png',
    blurb: `
    Pear Inc. is a multinational technology company renowned for its innovative products led by CEO John Smith and his partner Lisa Davis who met at a tech conference. In the past year, their market value increased by 20%. Analysts predict a bright future for Pear stock with continued growth.
  `,
    money: totals[0]
  },
  {
    id: 1,
    title: 'Buber',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/buber.jpg',
    blurb: 'Buber Corporation is a rideshare app founded by CEO Jane Johnson. She and her partner Mike Roberts connected through a mutual friend. Over the past year, they have seen a 15% rise in market value. A new rideshare app called Weee is rising in popularity, and experts are shakey about what it means for the future stock value of Buber. If you invest, it is a high risk and high reward.',
    money: totals[1]
  },
  {
    id: 2,
    title: 'Raymond Pachs',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/raymond.png',
    blurb: `
    Raymond Pachs Ltd., under CEO David Brown and his partner Sarah Adams, crossed paths at a networking event.
    Their market value surged by 25% in the last year.
    Raymond Pachs is expected to maintain its upward trajectory in the stock market.
  `,
    money: totals[2]
  },
  {
    id: 3,
    title: 'Beta',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/beta.png',
    blurb: `
    Beta Industries, helmed by CEO Emily White and her partner Mark Turner, met during their college days.
    Market value increased by 18% in the past year.
    Beta is poised for steady growth, according to financial forecasts.
  `,
    money: totals[3]
  },
  {
    id: 4,
    title: 'Scmarget',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/shmarget.jpg',
    blurb:  `
    Scmarget Group, led by CEO Michael Lee and his partner Sophia Green, became friends at a startup incubator.
    Market value grew by 30% in the last year.
    Scmarget is seen as a promising stock with potential for significant gains.
  `,
    money: totals[4]
  },
  {
    id: 5,
    title: 'Chilldelity',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/chilldelity.png',
    blurb: `
    Chilldelity Enterprises, with CEO Olivia Clark and her partner Daniel Walker, met at a coding bootcamp.
    Their market value surged by 22% over the past year.
    Chilldelity stock is anticipated to remain resilient in the market.
  `,
    money: totals[5]
  },
  {
    id: 6,
    title: 'Fresla',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/fresla.png',
    blurb:  `
    Fresla Corporation, under CEO Ethan Miller and his partner Rachel Adams, bonded over their love for fitness.
    Market value increased by 17% in the last year.
    Fresla is expected to continue its positive trend in the stock market.
  `,
    money: totals[6]
  },
  {
    id: 7,
    title: 'Dollmart',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/dollmart.jpeg',
    blurb: `
    Dollmart Inc., with CEO Samantha Lewis and her partner Kevin Parker, met through a mutual friend.
    Over the past year, they've seen a 19% rise in market value.
    Analysts predict strong potential for Dollmart stock.
  `,
    money: totals[7]
  },
  {
    id: 8,
    title: 'S&P',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/sp.png',
    blurb:  `
    S&P Holdings, led by CEO Christopher Baker, who co-founded the company.
    Market value saw steady growth of 12% in the past year.
    S&P remains a reliable choice for investors.
  `,
    money: totals[8]
  },
  {
    id: 9,
    title: 'YIKEY',
    image: '/Users/mayamarkusmalone/myKidFolio/please/img/yikey.png.jpeg',
    blurb: `
    YIKEY Technologies, with CEO Michelle Chen and her partner Alex Wang, started as college roommates.
    Their market value surged by 28% over the past year.
    YIKEY is considered a high-potential stock in the tech sector.
  `,
    money: totals[9]
  },
];

const add = (moneyState: { bigSum: number; id: number}, change: number) => {
  if(moneyState.bigSum>0){
    moneyState.bigSum = moneyState.bigSum - change;
    totals[moneyState.id] = totals[moneyState.id] + change;
    DATA[moneyState.id].money = totals[moneyState.id];
    console.log("add #big sum", moneyState.bigSum, "amount inversted in ", moneyState.id, totals[moneyState.id]);

  }
}

const sub = (moneyState:  { bigSum: number; id: number}, change: number) => {
  if(moneyState.bigSum>0){
    moneyState.bigSum = moneyState.bigSum + change;
    totals[moneyState.id] = totals[moneyState.id]- change;
    DATA[moneyState.id].money = totals[moneyState.id];
    console.log("sub #big sum", moneyState.bigSum, "amount inversted in ", moneyState.id , totals[moneyState.id]);
  }
  
}
function Stocks({navigation} : {navigation:any}) {

    const [moneyState, setMoneyState] = useState({
      bigSum: startMon,
      id: 0,
    });
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    
  
    useEffect(() => {
      console.log('moneyState.id changed to:', moneyState.id);
    }, [moneyState.id]);
  
      const renderItem = ({ item } : {item:any}) => {
  
        setMoneyState((prevState) => ({
          ...prevState,
          id: item.id,
        }));
        //moneyState.invested = item.money;
      }
      const handleItemClick = ({ item } : {item:any}) => {
        setSelectedItem(item);
        setModalVisible(true);
      };
  
      // const handleItemClick = (item) => {
      //   setSelectedItem(item);
      //   setModalVisible(true);
      // };
      
  
      return (
        <View style={styles.container}>
          <Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{ backgroundColor: 'green', color: 'white', fontSize: 40, marginVertical: 20}}>Money Left: ${moneyState.bigSum}</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('PopUps')}
            />
            </View>
          </Text>
  
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            {selectedItem && (
                <>
                  <Text>{(selectedItem as ItemData).title}</Text>
                  <Text>{(selectedItem as ItemData).blurb}</Text>
                </>
              )}
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Image 
                  source={{uri: '/Users/mayamarkusmalone/myKidFolio/please/img/return.png'}} 
                  style = {{height:20, width:20}}
                  />
                </Pressable>
            </View>
          </View>
        </Modal>
        <FlatList
        data={DATA}
        renderItem={({ item }) => (<View key={`${item.id}-${item.money}`}>
          <Pressable onPress={() => handleItemClick({ item })}>
            <Image 
            source={{uri: item.image}} 
            style = {{height:200, width:220}}
            />
          </Pressable>
          <Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                {/* <Text>{item.title} Investment:</Text> */}
                <Pressable onPress={() => {
                  sub(moneyState, incrementer);
                    setMoneyState((prevState) => ({
                      ...prevState,
                      id: item.id,
                    }));
  
  
  
                    // setMoneyState((prevState) => ({
                    //   ...prevState,
                    //   id: item.id,
                    // })).then(() => {
                    //   // This will be executed after the first function is finished
                    //   sub(moneyState, incrementer);
                    // });
  
                   }}>
                  <Image 
                  source={{uri: '/Users/mayamarkusmalone/myKidFolio/please/img/minus.png'}} 
                  style = {{height:20, width:20}}
                  />
                </Pressable>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> Invested ${item.money} </Text>
                <Pressable onPress={() => {
                  add(moneyState, incrementer);
                  setMoneyState((prevState) => ({
                    ...prevState,
                    id: item.id,
                  }));
  
                  
                  // setMoneyState((prevState) => ({
                  //   ...prevState,
                  //   id: item.id,
                  // })).then(() => {
                  //   // This will be executed after the first function is finished
                  //   add(moneyState, incrementer);
  
                  }}>
                  <Image 
                  source={{uri: '/Users/mayamarkusmalone/myKidFolio/please/img/plus.png'}} 
                  style = {{height:20, width:20}}
                  />
                </Pressable>
              </View>
          </Text>
        </View>)}
        keyExtractor={(item) => `${item.id}-${item.money}`}
        contentContainerStyle={{margin:4}}
        horizontal={false}
        numColumns = {2}
        />
        <Text style = {{marginVertical: 20, fontSize: 32}}>L</Text>
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
  
  export default Stocks;