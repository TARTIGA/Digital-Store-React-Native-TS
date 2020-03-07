import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import { AuthContext } from '../context'

const HomeScreen = ({ navigation }) => {
    const { signOut } = useContext(AuthContext)
    return (
        <Container>
            <Text>HomeScreen</Text>
            <Button title="Sign Out" onPress={() => signOut()} />
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default HomeScreen
