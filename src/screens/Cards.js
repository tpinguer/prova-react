import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cards from '../components/cards';
import Titles from '../components/titles';

export default function Screen2({ navigation }) {
  return (
    <>
      <View pagingEnabled>
        <Titles titles='Card Columns'/>
        <Cards img={require('../../assets/images/cart.jpg')} 
                      title='Card title that wraps to a new line'
                      text='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                      />
        <Cards img={require('../../assets/images/template2.jpg')} 
                      title='Card title that wraps to a new line'
                      text='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                      />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

})