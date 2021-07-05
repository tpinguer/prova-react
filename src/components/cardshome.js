import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'


export default function Cardhome(props) {

        return (
            <View style={styles.geral}>
                <Feather name={props.name} size={80} style={styles.icons}/>
                <View style={styles.geralText}>
                    <Text style={styles.iText}>{props.nome}</Text>
                    <Text style={styles.inText}>{props.subnome}</Text>
                </View>
            </View>
        );
}


const styles = StyleSheet.create({
    geral: {
        marginTop: 30,
        borderWidth: 1,
        width: '90%',
        height: '20%',
        marginLeft: 20,
    },
    iText: {
        fontSize: 50,
    },
    inText: {
        fontSize: 15,
    },
    icons: {
        marginTop: 50,
        marginLeft: 10,
        width: '100%'
    },
    geralText: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 40,
        flex: 1
    },
});