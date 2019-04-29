import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, ScrollView, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, CardItem, Button, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from "./login";
import mainStyles from "../styles/homeStyle";
import Styles from "../styles/mainStyle";

const users = [
 {
    name: <Text style={mainStyles.listTitle}>A personalised experience</Text>,
    subtitle: <Text style={mainStyles.listSubtitle}>Save your searches and shortlist properties you're interested in</Text>,
    avatar: <Image source={require ('../img/signup.png')} style={mainStyles.img}/>
 },
]

const buyRoute = () => (
    <View style={mainStyles.routeView}>
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
    indicatorStyle={mainStyles.indicator}
    labelStyle={mainStyles.label}
    style={mainStyles.tabbar}
    renderLabel={({ route, focused, color }) => (
      <Text style={[
            mainStyles.labelUnselected,
            focused ? mainStyles.labelSelected : null,
          ]}>
        {route.title}
      </Text>
    )}
    activeColor={mainStyles.labelSelected}
    inactiveColor={mainStyles.labelUnselected}
   />;

  render() {
    return (
      <SafeAreaView style={Styles.safeArea}>
        <View style={mainStyles.topView}>
          <Text style={mainStyles.mainTitle}>squarefoot.com.hk</Text>
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
          <View style={mainStyles.searchBarView}>
            <Text style={mainStyles.searchBar}> <Icon name="search" size={16} color="grey" style={{marginRight:20}}/>&nbsp;&nbsp; Search for properties</Text>
          </View>
        </View>
        <View style={mainStyles.botView}>
          <Text style={mainStyles.botTitle}>Sign-up or Login</Text>
          <Card containerStyle={[{margin: 0},{padding: 0}, {marginTop: 20}]} >
            {
              users.map((u, i) => {
                return (
                  <ListItem onPress={() => this.props.navigation.navigate('Login')}
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