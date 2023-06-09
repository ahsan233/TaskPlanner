import React from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { appColor } from '../utils/colors/colors';
  
  export default function CustomTextInput(props) {
    return (
      <View style={props.TextInput}>
        <TextInput
          style={styles.TextinputStyle}
          placeholder={props.placeholder}
          placeholderTextColor={appColor.greyDark}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          returnKeyType={props.returnKeyType}
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={false}
          value={props.value}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    TextinputStyle: {
      marginLeft: wp('2%'),
      width: wp('73%'),
      color: appColor.black,
    },
  });
  