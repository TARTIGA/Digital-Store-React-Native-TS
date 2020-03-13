import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Link, Button, CustomTextInput } from 'app/components'
import { AuthContext } from 'app/context'


const SignInScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <CustomTextInput
                value={null}
                placeholder={'Email'}
                placeholderTextColor={'#fff'}
                selectionColor={'#a5a5a5'}
                autoCompleteType={'email'}
                onChangeText={() => { }}
                bordColor={'#fff'} />
            <CustomTextInput
                value={null}
                placeholder={'Password'}
                placeholderTextColor={'#fff'}
                selectionColor={'#a5a5a5'}
                autoCompleteType={'password'}
                onChangeText={() => { }}
                bordColor={'#fff'} />
            <ButtonView>
                <Button handler={() => signIn('token')}
                    label={<Text>Sign In</Text>} />
            </ButtonView>
            <LinkView>
                <Link text="Don't have an account? Create account" fontSize={'16px'} color={'#FBDF00'} fontWeight={300} handler={() => navigation.push('CreateAccountScreen')} />
            </LinkView>
            <SkipLinkView>
                <Link text="Skip Registration" fontSize={'18px'} handler={() => signIn('token')} ></Link>
            </SkipLinkView>
        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
        justify-content:center;
        align-items:center;
        flex:1;
        `;


const ButtonView = styled.View`
margin-top:32px;
width:100%;
`;

const LinkView = styled.View`
text-align:center;
align-items:center;
margin-top:28px;
`;

const SkipLinkView = styled(LinkView)`
margin-top:48px;
`;

export default SignInScreen
