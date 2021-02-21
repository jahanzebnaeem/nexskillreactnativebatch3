import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyASqAoB14tiY5HS-QW8zfI5ADhhU_yCqDI',
      authDomain: 'rnb3manager.firebaseapp.com',
      projectId: 'rnb3manager',
      storageBucket: 'rnb3manager.appspot.com',
      messagingSenderId: '335119303250',
      appId: '1:335119303250:web:c51e256783cc253061558b',
      measurementId: 'G-SGK00GG9D7',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
