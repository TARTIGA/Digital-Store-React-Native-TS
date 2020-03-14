import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Button } from 'app/components'
import { AuthContext } from 'app/context'

const CategoryScreen = ({ navigation }) => {
    return (
        <Container>
            <Text>CategoryScreen</Text>
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default CategoryScreen