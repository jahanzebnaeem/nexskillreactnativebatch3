import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Card, CardSection, Button} from './common';

class LoginForm extends Component {
  state = {text: ''};

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            style={{width: 100, height: 20}}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
