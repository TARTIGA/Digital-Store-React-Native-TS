import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text, Image, View } from 'react-native'
import { Link, Button } from 'app/components'
import { AuthContext } from 'app/context'
import SvgUri from 'react-native-svg-uri';
import GIconSVG from 'app/assets/icons/GoogleiconSVG.svg'
import FBIconSVG from 'app/assets/icons/FacebookiconSVG.svg'

import { FontAwesome } from '@expo/vector-icons';


const AutorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <ButtonView>
                <Button handler={() => navigation.push('CreateAccountScreen')} >
                    <Text>Create account</Text>
                </Button>
                <SocialBtnView>
                    <Button handler={() => { }}
                        label={<Text>Sign In</Text>}
                        icon={<FontAwesome name="google" size={24} color="red" />} />
                    <Button
                        bgColor={'#415A93'}
                        textColor={'#fff'}
                        label={<Text>Sign In</Text>}
                        icon={<FontAwesome name="facebook" size={24} color="#fff" />}
                        handler={() => { }}
                    />
                </SocialBtnView>
            </ButtonView>
            <LinkView>
                <Link text="Already have an account? Sign In" fontSize={'16px'} color={'#FBDF00'} fontWeight={300} handler={() => navigation.push('SignInScreen')} />
            </LinkView>
            <LinkView>
                <Link text="Skip Registration" fontSize={'18px'} handler={() => navigation.push('App')} />
            </LinkView>
        </Container>
    );
}

const Container = styled.View`
        justify-content:center;
        `;


const ButtonView = styled.View`
margin-top:68;
width:100%;
`;

const SocialBtnView = styled.View`
margin-top:32;
`;

const LinkView = styled.View`
text-align:center;
align-items:center;
margin-top:48px;
`;

export default AutorizationScreen