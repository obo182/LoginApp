import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
    const onSignInFacebookPressed = () => {
        console.warn('Sign In with Facebook')
    }
    const onSignInGooglePressed = () => {
        console.warn('Sign In with Google')
    }
    return (
        <>
            <CustomButton
                text='Sign in with Facebook'
                onPress={onSignInFacebookPressed}
                bgColor='#cce5ff'
                fgColor='#006fe6'
            />
            <CustomButton
                text='Sign in with Google'
                onPress={onSignInGooglePressed}
                bgColor='#ffc6b3'
                fgColor='#cc3300'
            />
        </>
    )
}

export default SocialSignInButton