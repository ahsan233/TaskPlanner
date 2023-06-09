import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {appColor} from '../utils/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Exit from '../assets/images/Exit.svg';
import LeftArrow from '../assets/images/LeftArrow.svg';
import RightArrow from '../assets/images/RightArrow.svg';
import Calender from '../assets/images/Calender.svg';
export default function CustomHeader(props) {
  return (
    <View style={styles.header}>
      <Exit />
      <LeftArrow />
      <Text style={styles.Text}>Today</Text>
      <RightArrow />
      <Calender />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: appColor.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
  },
  Text: {
    color: appColor.black,
    fontSize: hp('2.2%'),
  },
});
