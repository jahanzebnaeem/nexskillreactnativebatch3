/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import premade componenets
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// make a component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// display the component
AppRegistry.registerComponent('albums', () => App);
