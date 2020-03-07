import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text, Button, Image } from 'react-native'
import { AuthContext } from '../context'
import WaterfallImage from '../assets/waterfall.svg'
// import SvgUri  from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';


const AutorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container>
            <Text>AutorizationScreen</Text>
            <SvgUri
                width="200"
                height="200"
                source={WaterfallImage}
            />
            <Button title="Sign In" onPress={() => signIn()} />
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
justify-content:center;
align-items:center;
`;

export default AutorizationScreen
