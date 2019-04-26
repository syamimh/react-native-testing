import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';

const profileStyle = StyleSheet.create({
  title: { fontSize: 20, color: "#000", textAlign: "center", marginTop:20 },

  title2: { fontSize: 20, color: "#900", textAlign: "center", marginTop:10 },

  lineStyle:{
        borderWidth: 0.5,
        borderColor:'#ccc',
        marginTop:20
   },

   listTitle: {fontSize: 16, color:"#000", fontWeight: "bold", padding:2},

   listSubtitle: {fontSize: 14, color:"grey", padding:2, paddingBottom:20},

   borBot: {borderBottomColor:"#ccc", borderBottomWidth: 0.5, height:60}
});

// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const list = [
  {
    name: <Text style={profileStyle.listTitle}>Settings</Text>,
    avatar_url: <Image source={require ('./img/settings.png')} style={{width:60, height:60, marginBottom:10}}/>,
    subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>App and privacy settings</Text></View>
  },
  {
    name: <Text style={profileStyle.listTitle}>Mortgage Calculator</Text>,
    avatar_url: <Image source={require ('./img/calculator.png')} style={{width:60, height:60, marginBottom:10}}/>,
    subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Calculate monthly repayments for any property</Text></View>
  },
  {
    name: <Text style={profileStyle.listTitle}>Help & Feedback</Text>,
    avatar_url: <Image source={require ('./img/help.png')} style={{width:60, height:60, marginBottom:10}}/>,
    subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Suggest a feature, report an issue, or send feedback</Text></View>
  },
  {
    name: <Text style={profileStyle.listTitle}>Rate Us</Text>,
    avatar_url: <Image source={require ('./img/rate.png')} style={{width:60, height:60, marginBottom:10}}/>,
    subtitle: <View style={profileStyle.borBot}><Text style={profileStyle.listSubtitle}>Rate & Review the app on the Google Play Store</Text></View>
  }
];

export default class ProfileScreen extends Component {
  render() {
    return (
      	<SafeAreaView style={{flex: 1, backgroundColor: '#ef473a', height:40}}>
			    <View style={{backgroundColor: '#fff',flex:1}}>
  		    	<Text style={profileStyle.title}>Welcome</Text>
  		    	<Text style={profileStyle.title2}>Login or Sign Up</Text>

  		    	<View style={profileStyle.lineStyle} />

  		    	<ScrollView>
  				  {
  				    list.map((l, i) => (
  				      <ListItem
  				        key={i}
  				        leftAvatar={l.avatar_url}
  				        title={l.name}
  				        subtitle={l.subtitle}
  				      />
  				    ))
  				  }
  				  </ScrollView>
		  	  </View>
		</SafeAreaView>
    )
  }
}