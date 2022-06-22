import { View, StyleSheet, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ConfirmRegisterScreen = () => {
    const navigation = useNavigation()

    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const { control, handleSubmit, watch } = useForm()
    const pwd = watch('password')

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmRegister')
    }
    const onTermUsePressed = () => {
        console.warn('Term of Use')
    }
    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy Policy')
    }
    const onHaveAccountPressed = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    name='username'
                    placeholder='Username'
                    control={control}
                    rules={{
                        required: 'Username is Required.',
                        minLength: {
                            value: 5,
                            message: 'Username should be at least 5 characters long.'
                        },
                        mexLength: {
                            value: 15,
                            message: 'Username should be max 15 characters long.'
                        }
                    }}
                />
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
                <CustomInput
                    name='password'
                    placeholder='Password'
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is Required.',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long.'
                        }
                    }}
                />
                <CustomInput
                    name='confirm-password'
                    placeholder='Confirm Password'
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Confirm password is Required.',
                        validate: value => value === pwd || 'Password do not match.'
                    }}
                />
                <CustomButton
                    text='Register'
                    onPress={handleSubmit(onRegisterPressed)}
                />
                <Text style={styles.text}>By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onTermUsePressed}> Term of Use</Text> and
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>.
                </Text>
                <SocialSignInButton />
                <CustomButton
                    text="Already have an account? Sign In here"
                    type='TERTIARY'
                    onPress={onHaveAccountPressed}
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
        margin: 15,
        alignSelf: 'center'
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