import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import { AuthContext } from '../context'


const AutorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container>
            <Text>AutorizationScreen</Text>
            <Button title="Sign In" onPress={() => signIn()} />
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default AutorizationScreen
