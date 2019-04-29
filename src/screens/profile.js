import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Text, Image, ScrollView, Alert } from 'react-native';
import { createAppContainer, createStackNavigator, withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';
import Login from "./login";
import Settings from "./settings";
import profileStyle from "../styles/profileStyle";
import mainStyle from "../styles/mainStyle";

class ProfileScreen extends Component {

  _onPressButton() {
    this.props.navigation.navigate('Settings')
  };

  _onPressButton2() {
    Alert.alert("Still working on it!");
  };

  render() {
    const { navigation } = this.props.navigation.navigate;
    const list = [
      {
        name: <Text style={profileStyle.listTitle}>Settings</Text>,
        avatar_url: <Image source={require ('../img/settings.png')} style={profileStyle.avatarImg}/>,
        subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>App and privacy settings</Text></View>,
        onPress: () => this._onPressButton()
      },
      {
        name: <Text style={profileStyle.listTitle}>Mortgage Calculator</Text>,
        avatar_url: <Image source={require ('../img/calculator.png')} style={profileStyle.avatarImg}/>,
        subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Calculate monthly repayments for any property</Text></View>,
        onPress: () => this._onPressButton2()
      },
      {
        name: <Text style={profileStyle.listTitle}>Help & Feedback</Text>,
        avatar_url: <Image source={require ('../img/help.png')} style={profileStyle.avatarImg}/>,
        subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Suggest a feature, report an issue, or send feedback</Text></View>,
        onPress: () => this._onPressButton2()
      },
      {
        name: <Text style={profileStyle.listTitle}>Rate Us</Text>,
        avatar_url: <Image source={require ('../img/rate.png')} style={profileStyle.avatarImg}/>,
        subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Rate & Review the app on the Google Play Store</Text></View>,
        onPress: () => this._onPressButton2()
      }
    ];

    return (
      	<SafeAreaView style={mainStyle.safeArea}>
			    <View style={mainStyle.mainView}>
  		    	<Text style={profileStyle.title}>Welcome</Text>
  		    	<Text style={profileStyle.title2} onPress={() => this.props.navigation.navigate('Login')}>Login or Sign Up</Text>

  		    	<View style={profileStyle.lineStyle} />

  		    	<ScrollView>
  				  {
  				    list.map((l, i) => (
  				      <ListItem
  				        key={i}
  				        leftAvatar={l.avatar_url}
  				        title={l.name}
  				        subtitle={l.subtitle}
                  onPress={l.onPress}
  				      />
  				    ))
  				  }
  				  </ScrollView>
		  	  </View>
		</SafeAreaView>
    )
  }
}

export default withNavigation(ProfileScreen);