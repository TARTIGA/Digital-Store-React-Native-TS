import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Button } from 'app/components'
import { AuthContext } from 'app/context'

const CategoriesScreen = ({ navigation }) => {
    return (
        <Container>
            <Button handler={() => navigation.push('Category')} label={<Text>Laptops</Text>} />
            <Button handler={() => navigation.push('Category')} label={<Text>Category</Text>} />
            <Button handler={() => navigation.push('Category')} label={<Text>Category</Text>} />
            <Button handler={() => navigation.push('Category')} label={<Text>Category</Text>} />
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default CategoriesScreen
