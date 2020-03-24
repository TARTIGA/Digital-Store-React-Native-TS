import React, { useContext, useLayoutEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { AuthContext } from 'app/context'

const CategoryScreen = ({ navigation, route }) => {
    const { signOut } = useContext(AuthContext)
    const { title } = route.params
    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: title });
    }, [navigation, route]);
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
