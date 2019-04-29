import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createAppContainer, createStackNavigator, withNavigation } from "react-navigation";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from "./login";
import styles from "../styles/savedStyle";

class ShortListScreen extends Component {
  render() {
    return (
    	<View style={styles.scene}>
        <Image source={require ('../img/saved-1.png')} style={styles.imageSrc1}/>
        <Text style={styles.title}>Shortlisted Properties</Text>
        <Text style={styles.title2}>You must be logged in to shortlist properties.</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} 
          title="Log In"
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

export default withNavigation(ShortListScreen);