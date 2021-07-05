import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

export default function Titles(props) {

        return (
            <View style={styles.geral}>
                <Text style={styles.textP}>{props.titles}</Text>
            </View>
        );
}


const styles = StyleSheet.create({
    geral: {
        marginTop: 30,
        borderWidth: 1,
        width: '90%',
        height: '6%',
        marginLeft: 20,
        paddingLeft: 10,
    },
    textP: {
        fontSize: 40,
        color: '#00f'
    }
});