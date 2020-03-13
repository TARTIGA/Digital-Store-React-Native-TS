import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text, Image, View } from 'react-native'
import { Link, Button } from 'app/components'
import { AuthContext } from 'app/context'
// import LogoSvg from '../assets/img/Logo.svg'
// import SvgUri from 'react-native-svg-uri';
const LogoImg = require('app/assets/img/Logo.png')



const FirstScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <View>
                <MainLabel>Digital Shop</MainLabel>
            </View>
            <ImageView>
                {/* <SvgUri
                    source={LogoSvg}
                /> */}
                <Image
                    style={{ width: 216, height: 216 }}
                    source={LogoImg}
                />
            </ImageView>
            <ButtonView>
                <Button handler={() => navigation.push('LargeScreen')} >
                    <Text>Let's go!</Text>
                </Button>
            </ButtonView>
            <LinkView>
                <Link text="Skip Registration" fontSize={'18px'} handler={() => navigation.push('LargeScreen')} />
            </LinkView>
        </Container>
    );
}

const Container = styled.View`
        flex: 1;
        padding:32px;
        background-color:#0001FC;
        justify-content:center;
        align-items:center;
        `;

const MainLabel = styled.Text`
        font-weight:700;
        color:#fff;
        font-size:42px;
        text-align:center;
        `;

const ButtonView = styled.View`
margin-top:68;
width:100%;
`;

const LinkView = styled.View`
text-align:center;
align-items:center;
margin-top:72px;
`;

const ImageView = styled.View`
     align-items:center;
     justify-content:center;
     margin-top:68;
`;


export default FirstScreen
