import { View, StyleSheet, Image, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Logo from '../../assets/logo/BoxLogo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const SignInScreen = () => {
    const navigation = useNavigation()

    const { control, handleSubmit } = useForm()

    const { height } = useWindowDimensions()

    const onSignInPressed = data => {
        //validated user
        console.log(data)
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword')
    }
    const onDontHaveAccountPressed = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.root}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={Logo}
                    resizeMode='contain'
                    style={[styles.logo, { height: height * 0.3, }]}
                />
                <CustomInput
                    name="username"
                    placeholder='Username'
                    control={control}
                    rules={{
                        required: 'Username is Required',
                        minLength: {
                            value: 5,
                            message: 'Username should be minimum 5 characters long.'
                        }
                    }}
                />
                <CustomInput
                    name="password"
                    placeholder='Password'
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is Required',
                        minLength: {
                            value: 8,
                            message: 'Password should be minimum 8 characters long.'
                        }
                    }}
                />
                <CustomButton
                    text='Sign in'
                    onPress={handleSubmit(onSignInPressed)}
                />
                <CustomButton
                    text='Forgot Password?'
                    type='TERTIARY'
                    onPress={onForgotPasswordPressed}
                />
                <SocialSignInButton />
                <CustomButton
                    text="Don' t have an account? Create One"
                    type='TERTIARY'
                    onPress={onDontHaveAccountPressed}
                />
            </ScrollView>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#1e1e1e",
        padding: 30,
        flex: 1,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
        alignSelf: 'center'
    }
})