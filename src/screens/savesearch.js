import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createAppContainer, createStackNavigator, withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Login from "./login";
import styles from "../styles/savedStyle";

class SaveSearchScreen extends Component {
  render() {
    return (
    	<View style={styles.scene} >
        <Image resizeMode="contain" source={require ('../img/saved-2.png')} style={styles.imageSrc2}/>
        <Text style={styles.title}>Saved Searches</Text>
        <Text style={styles.title2}>You must be logged in to being saving your searches.</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}
          title="Log In"
          buttonStyle={styles.button}
        />
      </View>
    )
  }
}

export default withNavigation(SaveSearchScreen);