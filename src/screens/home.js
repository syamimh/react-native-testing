import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const mainStyles = StyleSheet.create({
  mainTitle :{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginTop: -10,
    marginBottom: 20
  },

  botTitle :{
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: "left",
    color: "#000"
  },

  topView :{
    backgroundColor: '#ef473a',
    flex: 1,
    margin:10
  },

  botView :{
    backgroundColor: '#fefefe',
    flex: 3.5,
    padding: 15,
  },

  listTitle :{
    fontWeight: 'bold',
    fontSize: 18,
  },

  listSubtitle :{
    fontSize: 14,
    color:"grey",
    paddingTop:10
  },
});

const users = [
 {
    name: <Text style={mainStyles.listTitle}>A personalised experience</Text>,
    subtitle: <Text style={mainStyles.listSubtitle}>Save your searches and shortlist properties you're interested in</Text>,
    avatar: <Image source={require ('./img/signup.png')} style={{width:65, height:65}}/>
 },
]

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

const buyRoute = () => (
    <View style={ { justifyContent: "center", backgroundColor: '#fff', height:0 }}>
      <Text>Just to get the routing index, this text is on bg</Text>
    </View>
);

export default class SearchScreen extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'buy', title: 'BUY' },
      { key: 'rent', title: 'RENT' },
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
        <View style={mainStyles.topView}>
          <Text style={mainStyles.mainTitle}>Title</Text>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              buy: buyRoute,
              rent: buyRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{width: Dimensions.get('window').width}}
            renderTabBar={this.renderTabBar}
          />
          <View style={{backgroundColor:"#fff", position:'absolute', flex:1, width: 100, top:82, width: Dimensions.get('window').width-20, borderTopColor:"#eee", borderTopWidth: 1}}>
            <Text style={{height:50, padding:15, color:"grey"}}> <Icon name="search" size={16} color="grey" style={{marginRight:20}}/>&nbsp;&nbsp; Search for properties</Text>
          </View>
        </View>
        <View style={mainStyles.botView}>
          <Text style={mainStyles.botTitle}>Sign-up or Login</Text>
          <Card containerStyle={[{margin: 0},{padding: 0}, {marginTop: 20}]} >
            {
              users.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={u.avatar}
                    subtitle={u.subtitle}
                  />
                );
              })
            }
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}