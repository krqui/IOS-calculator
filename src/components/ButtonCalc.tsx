import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string,
    color?: string,
    ancho?: boolean,
    action: (numberInText: string) => void
}
const ButtonCalc = ({ text, color = "#2D2D2D", ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{ ...styles.botontext, color: (color === '#9B9B9B') ? 'black' : 'white' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: "center",
        marginHorizontal: 10
    },
    botontext: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        //color:'white',
        fontWeight: '300'
    }
});

export default ButtonCalc
