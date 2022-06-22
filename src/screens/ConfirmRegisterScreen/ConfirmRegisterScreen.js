import { View, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ConfirmRegisterScreen = () => {
    const navigation = useNavigation()
    const { control, handleSubmit } = useForm()

    const onConfirmPressed = () => {
        navigation.navigate('Home')
    }
    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const onResendCodePressed = () => {
        console.warn('Resend Code')
    }

    return (
        <View style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    name='code'
                    placeholder='Confirmation code'
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Code is Required.',
                        minLength: {
                            value: 6,
                            message: 'Confirmation code should be at least 6 characters long.'
                        },
                        mexLength: {
                            value: 6,
                            message: 'Confirmation code should be max 6 characters long.'
                        }
                    }}
                />
                <CustomButton
                    text='Confirm'
                    onPress={handleSubmit(onConfirmPressed)}
                />
                <CustomButton
                    text="Resend Code"
                    type='SECONDARY'
                    onPress={onResendCodePressed}
                />
                <CustomButton
                    text="Back to Sign In"
                    type='TERTIARY'
                    onPress={onBackToSignInPressed}
                />

            </ScrollView>
        </View>
    )
}

export default ConfirmRegisterScreen

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#1e1e1e",
        padding: 30,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        color: '#ef8c86',
        margin: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'lightgrey',
        marginVertical: 10,
    },
    link: {
        color: '#fcb677'
    },
})