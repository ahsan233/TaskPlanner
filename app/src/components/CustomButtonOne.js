import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function CustomButtonOne(props) {
  return (
    <TouchableOpacity style={props.style} onPress={props.customClick}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}