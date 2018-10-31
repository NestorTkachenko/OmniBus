 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';

 import { MapView } from 'expo';
 import {createMaterialTopTabNavigator, StackNavigator } from 'react-navigation';
//import Geolocation from 'react-native-geolocation-service';
import FirstScreen from './tabs/FirstScreen';
import SecondScreen from './tabs/SecondScreen';
import ThirdScreen from './tabs/ThirdScreen';
import t from 'tcomb-form-native';



var MainScreenNavigator = createMaterialTopTabNavigator ({
  Tab1: {screen: FirstScreen},
  Tab2: {screen: SecondScreen},
  Tab3: {screen: ThirdScreen}
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  
  tabBarOptions:{
    /*activeTintColor: 'white',
    activeBackgroundColor:'darkgreen',
    inactiveTintColor:'black',
    inactiveBackgroundColor:'green',*/
    style: { padding: 0 },
    showIcon: true,
    labelStyle:{
      fontSize: 16,
      fontWeight: 'bold',
      padding: 0,
      margin: 0,

    }

  }

}



);

const MainStack = StackNavigator({
Home: {screen: MainScreenNavigator}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

MainScreenNavigator.navigationOptions = {
  title: "Tab example"
};

MainStack.navigationOptions = ({navigation})=> ({

});

export default MainStack;