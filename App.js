import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { PrimeiraTela, SegundaTela, TerceiraTela, QuartaTela, QuintaTela } from './rotas'

const Tab = createDrawerNavigator()

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashborad"
          component={PrimeiraTela}
        />
        <Tab.Screen
          name="Default cards"
          component={SegundaTela}
        />
        <Tab.Screen
          name="Pricing tables"
          component={TerceiraTela}
        />
        <Tab.Screen
          name="Content blocks"
          component={QuartaTela}
        />
        <Tab.Screen
          name="Forms"
          component={QuintaTela}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});