import React from 'react'
import { View, StyleSheet, Text, Image} from 'react-native'


export default function Cards(props) {

        return (
        <>    
            <View style={styles.geral}>
                <Image style={styles.imgCard} source={props.img}/>
                <View style={styles.geralT}>
                    <Text style={styles.titulo}>{props.title}</Text>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            </View>
        </>
        );
}

const styles = StyleSheet.create({
    geral: {
        marginTop: 30,
        borderWidth: 1,
        width: '92%',
        height: '50%',
        marginLeft: 20,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        marginLeft: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        marginLeft: 20,
    },
    imgCard: {
        width: '90%',
        height: '60%',
        marginBottom: 30,
        marginTop: 10
    }
});