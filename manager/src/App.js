import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
