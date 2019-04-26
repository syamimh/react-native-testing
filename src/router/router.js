/* /src/router/index.js */
import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { tabBarOptions } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from "react-native-vector-icons/Ionicons";
import {
  HomeScreen,
  SearchScreen,
  FavoritesScreen,
  ProfileScreen
} from "../screens";

import Profile from "../screens/profile";
import Saved from "../screens/saved";
import HomePage from "../screens/home";

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomePage,
      navigationOptions: {
      	tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="home" color={tintColor} />
      }
    },
    SearchScreen: {
      screen: Saved,
      navigationOptions: {
      	tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="star" color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {
      	tabBarLabel: "Me",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="user" color={tintColor} />
      }
    },
    
},
{
  tabBarOptions: {
      activeTintColor: '#ef473a',
      inactiveTintColor: 'grey',
    }
});

export default createAppContainer(TabNavigator);