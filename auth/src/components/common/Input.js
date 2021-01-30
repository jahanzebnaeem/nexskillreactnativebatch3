import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {containerStyle, textStyle, labelStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={textStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    flex: 1,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    flex: 2,
    fontSize: 16,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
};

export {Input};
