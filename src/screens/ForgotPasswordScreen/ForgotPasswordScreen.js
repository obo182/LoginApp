import { View, StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()
    const { control, handleSubmit } = useForm()

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const onSendCodePressed = () => {
        console.warn('Confirm email')
    }
    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    name='email'
                    placeholder='Email'
                    control={control}
                    rules={{
                        required: 'Email is Required.',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid!'
                        }

                    }
                    }
                />
                <CustomButton
                    text='Send code'
                    onPress={handleSubmit(onSendCodePressed)}
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

export default ForgotPasswordScreen

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