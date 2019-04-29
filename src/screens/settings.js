import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { createAppContainer, withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, CheckBox  } from 'react-native-elements';
import { SettingsScreen } from "react-native-settings-screen";
import DeviceInfo from 'react-native-device-info';
import profileStyle from "../styles/profileStyle";
import mainStyle from "../styles/mainStyle";

const deviceName = DeviceInfo.getDeviceName();

class SettingScreen extends Component {

  state = {
    checked:false
  };
  settingsData: SettingsData = [
    {
      type: 'SECTION',
      header: 'General',
      rows: [
        {
          title: 'Conserve data usage',
          subtitle: 'Could affect image quality',
          renderAccessory: () => <CheckBox checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} checkedColor='#e0212d' />,
          onPress: () => this.setState({checked: !this.state.checked})
        },
        {
          title: 'Language',
        },
        
      ],
    },
    {
      type: 'SECTION',
      header: 'Privacy',
      rows: [
        {
          title: 'Clear local search history',
          subtitle: 'Clear all searches made on this device'
        },
        {
          title: 'Clear local browse history',
          subtitle: 'Clear all properties viewed on this device'
        },
      ],
    },
    {
      type: 'SECTION',
      header: 'About',
      rows: [
        {
          title: 'SquareFoot',
        },
        {
          title: 'Terms of Service',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Device',
          subtitle: deviceName
        },
        {
          title: 'App Version',
          subtitle: 'Version 1.7.2.1 | Build 1720104'
        },
      ],
    },
  ]

  render() {
    return (
    	<SafeAreaView style={mainStyle.safeAreaWhite}>
        <ScrollView>
         <SettingsScreen
          data={this.settingsData} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default withNavigation(SettingScreen);