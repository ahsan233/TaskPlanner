import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {appColor} from '../utils/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={props.style} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
      <Image
        source={require('../assets/images/SearchWhite.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: appColor.white,
    fontSize: hp('2.2%'),
  },
  image: {
    width: wp('8%'),
    height: hp('4%'),
    marginLeft: wp('2%'),
  },
});
