import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Button } from 'react-native-elements';
import Shortlist from "./shortlist";
import SaveSearch from "./savesearch";
import styleSave from "../styles/savedStyle";
import mainStyle from "../styles/mainStyle";

const FirstRoute = () => (
  <Shortlist />
);

const SecondRoute = () => (
  <SaveSearch />
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
    indicatorStyle={styleSave.indicator}
    labelStyle={styleSave.label}
    style={styleSave.tabbar}
    renderLabel={({ route, focused, color }) => (
      <Text style={[
            styleSave.labelUnselected,
            focused ? styleSave.labelSelected : null,
          ]}>
        {route.title}
      </Text>
    )}
    activeColor={styleSave.labelSelected}
    inactiveColor={styleSave.labelUnselected}
   />;

  render() {
    const { navigation } = this.props.navigation.navigate;
    return (
      <SafeAreaView style={mainStyle.safeArea}>
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