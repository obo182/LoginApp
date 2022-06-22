import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.text}>Hello World Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#1e1e1e",
        padding: 30,
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'darkgrey',
        fontSize: 13
    },
    title: {
        color: 'darkgrey',
        fontSize: 30,
        fontWeight: '900'
    }
})

export default HomeScreen