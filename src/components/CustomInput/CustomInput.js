import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import React from 'react'

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.container, { borderColor: error ? 'red' : '#292929' }]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (<Text style={styles.textError}>{error.message || 'Error'}</Text>)}
                </>
            )}
        />

    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        width: '100%',

        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,

        paddingHorizontal: 10,
        marginVertical: 10
    },
    textError: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        alignSelf: 'stretch'
    },
    input: {

    },
})