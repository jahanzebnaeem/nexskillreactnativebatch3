import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrYdikhvdfIvmA9tThcabxVEjtNTkRJyY',
      authDomain: 'authentication-6bfcb.firebaseapp.com',
      projectId: 'authentication-6bfcb',
      storageBucket: 'authentication-6bfcb.appspot.com',
      messagingSenderId: '911944670632',
      appId: '1:911944670632:web:be48504f7471e625d6d19d',
      measurementId: 'G-5HWZ8Y7QXH',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
