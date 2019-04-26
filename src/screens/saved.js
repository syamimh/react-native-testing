import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    textAlign: "center"
  },

  tabbar:{
    backgroundColor: '#000',
    flex: 1,
    height: 80
  },

  button:{
    color: '#000',
  }
});

const textStyle = StyleSheet.create({
  title: { fontSize: 20, color: "#000", textAlign: "center", marginTop:20, fontWeight: "bold" },

  title2: { fontSize: 16, color: "grey", textAlign: "center", marginTop:20 }
});

const FirstRoute = () => (
    <View style={[styles.scene, { justifyContent: "center", backgroundColor: '#fff' }]}>
      <Image source={require ('./img/saved-1.png')} style={{width:240, height:240, marginBottom:10, alignSelf:"center"}}/>
      <Text style={textStyle.title}>Shortlisted Properties</Text>
      <Text style={textStyle.title2}>You must be logged in to shortlist properties.</Text>
      <Button
        title="Log In"
        buttonStyle={{width:200, backgroundColor:"#ef473a", marginTop: 30, alignSelf: 'center'}}
      />
    </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { justifyContent: "center", backgroundColor: '#fff' }]} >
    <Image resizeMode="contain" source={require ('./img/saved-2.png')} style={{justifyContent: "center", height:140, marginBottom:10, alignSelf:"center"}}/>
    <Text style={textStyle.title}>Saved Searches</Text>
    <Text style={textStyle.title2}>You must be logged in to being saving your searches.</Text>
    <Button
      title="Log In"
      buttonStyle={{width:200, backgroundColor:"#ef473a", marginTop: 30, alignSelf: 'center'}}
    />
  </View>
);

export default class SearchScreen extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'SHORTLIST' },
      { key: 'second', title: 'SEARCHES' },
    ],
  };

  renderTabBar = props => <TabBar 
    {...props}
    indicatorStyle={stylesHome.indicator}
    labelStyle={stylesHome.label}
    style={stylesHome.tabbar}
    renderLabel={({ route, focused, color }) => (
      <Text style={[
            stylesHome.labelUnselected,
            focused ? stylesHome.labelSelected : null,
          ]}>
        {route.title}
      </Text>
    )}
    activeColor={stylesHome.labelSelected}
    inactiveColor={stylesHome.labelUnselected}
   />;

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ef473a', height:40}}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width}}
          renderTabBar={this.renderTabBar}
        />
      </SafeAreaView>
    );
  }
}

const stylesHome = StyleSheet.create({
  tabbar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#ef473a',
  },
  label: {
    color: '#000',
    fontSize: 14,
  },
  labelSelected: {
    fontSize: 14,
    color: '#ef473a',
  },
  labelUnselected: {
    fontSize: 14,
    color: '#000',
  },
});