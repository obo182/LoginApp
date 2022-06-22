import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, bgColor, fgColor, type = "PRIMARY" }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]} >

            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}
                ]}>
                {text}
            </Text>
        </Pressable >
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 15
    },
    container_PRIMARY: {
        backgroundColor: '#ef8c86',
    },
    container_SECONDARY: {
        borderColor: '#ef8c86',
        borderWidth: 2
    },
    container_TERTIARY: {

    },
    text: {
        fontWeight: '900',
        color: 'white'
    },
    text_SECONDARY: {
        color: 'lightgrey'
    },
    text_TERTIARY: {
        fontWeight: '900',
        color: 'lightgrey'
    },
})