import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import TelaAnterior from './src/screens/TelaAnterior'
import Screen1 from './src/screens/Dashboard'
import Screen2 from './src/screens/Cards'
import Screen3 from './src/screens/Pricing Tables'
import Screen4 from './src/screens/Screen4'
import Screen5 from './src/screens/Screen5'

const Stack = createStackNavigator()

const PrimeiraTela = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Screen1}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={()=>navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export {PrimeiraTela}

const SegundaTela = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Default cards"
                component={Screen2}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={()=>navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export {SegundaTela}

const TerceiraTela = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pricing tables"
                component={Screen3}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={()=>navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export {TerceiraTela}

const QuartaTela = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Content blocks"
                component={Screen4}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={()=>navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export {QuartaTela}

const QuintaTela = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Forms"
                component={Screen5}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={()=>navigation.openDrawer()}>
                            <Feather
                                name='menu'
                                size={30}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Stack.Screen
                name="TelaAnterior"
                component={TelaAnterior}
            />
        </Stack.Navigator>
    )
}

export {QuintaTela}