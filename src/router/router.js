/* /src/router/index.js */
import React from "react";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { tabBarOptions } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from "../screens/profile";
import Saved from "../screens/saved";
import Home from "../screens/home";
import Login from "../screens/login";
import Settings from "../screens/settings";

const HomePage = createStackNavigator({
   Home: {
       screen: Home,
       navigationOptions: () => ({
           header: null,
        }),
   },
   Login: {
       screen: Login,
       navigationOptions: () => ({
          headerTitleStyle: {
           color: "#000"
          },
          headerStyle: {
            backgroundColor: "#fff",
            color: "#000"
          },
          headerTintColor: '#000',
      }),
   }
 });

const SavedPage = createStackNavigator({
   Save: {
       screen: Saved,
       navigationOptions: () => ({
           header: null,
        }),
   },
   Login: {
       screen: Login,
       navigationOptions: () => ({
          headerTitleStyle: {
           color: "#000"
          },
          headerStyle: {
            backgroundColor: "#fff",
            color: "#000"
          },
          headerTintColor: '#000',
      }),
   }
 });

const ProfilePage = createStackNavigator({
   Profile: {
       screen: Profile,
       navigationOptions: () => ({
           header: null,
        }),
   },
   Login: {
       screen: Login,
       navigationOptions: () => ({
          headerTitleStyle: {
           color: "#000"
          },
          headerStyle: {
            backgroundColor: "#fff",
            color: "#000"
          },
          headerTintColor: '#000',
      }),
   },
   Settings: {
       screen: Settings,
       navigationOptions: () => ({
          title: "Settings",
          headerTitleStyle: {
           color: "#000"
          },
          headerStyle: {
            backgroundColor: "#fff",
            color: "#000"
          },
          headerTintColor: '#000',
      }),
   }
 });

HomePage.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Login') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

SavedPage.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Login') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

ProfilePage.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Login' || routeName === 'Settings') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
      screen: HomePage,
      navigationOptions: {
      	tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="home" color={tintColor} />
      }
    },
    SavedScreen: {
      screen: SavedPage,
      navigationOptions: {
      	tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="star" color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfilePage,
      navigationOptions: {
      	tabBarLabel: "Me",
        tabBarIcon: ({ tintColor }) => <Icon size={20} name="user" color={tintColor} />
      }
    },
    
},
{
  tabBarOptions: {
      activeTintColor: '#e0212d',
      inactiveTintColor: 'grey',
    }
});

export default createAppContainer(TabNavigator);