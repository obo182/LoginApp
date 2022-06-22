import { View, StyleSheet, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'

const NewPasswordScreen = () => {
    const [verificationCode, setVerificationCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const ononSubmitNewPassword = () => {
        console.warn('Submit new password')
    }
    const onBackToSignInPressed = () => {
        console.warn('Back to Sign In')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder='Verification code'
                    value={verificationCode}
                    setValue={setVerificationCode}
                    secureTextEntry
                />
                <CustomInput
                    placeholder='New Password'
                    value={newPassword}
                    setValue={setNewPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder='Confirm New Password'
                    value={confirmNewPassword}
                    setValue={setConfirmNewPassword}
                    secureTextEntry
                />
                <CustomButton
                    text='Submit'
                    onPress={ononSubmitNewPassword}
                />
                <CustomButton
                    text="Back to Sign In"
                    type='TERTIARY'
                    onPress={onBackToSignInPressed}
                />

            </View>
        </ScrollView>
    )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: "#1e1e1e",
        justifyContent: 'center',
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