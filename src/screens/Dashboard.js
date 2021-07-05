import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Cardhome from '../components/cardshome';

export default function Screen1({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Hi, John, Welcome backs</Text>
      <Cardhome name='user' nome='28.75 M' subnome='Total Users'/>
      <Cardhome name='eye' nome='51.25 K' subnome='Daily Visitors'/>
      <Cardhome name='download-cloud' nome='166.89 M' subnome='Downloads'/>
      <Cardhome name='shopping-cart' nome='1,250 K' subnome='Purchased'/>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginLeft: 20
  }
})