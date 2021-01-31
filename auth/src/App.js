import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
