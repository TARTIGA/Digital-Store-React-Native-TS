import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, FlatList, SafeAreaView } from 'react-native'
import { Button } from 'app/components'
import { AuthContext } from 'app/context'
import Constants from 'expo-constants';

const CategoriesScreen = ({ navigation }) => {
    const [categories, setcategories] = useState([
        {
            label: 'All goods',
        },
        {
            label: 'Computers',
        },
        {
            label: 'Accessories',
        },
        {
            label: 'Smartphones',
        },
        {
            label: 'Speakers',
        },
        {
            label: 'Columns',
        },
        {
            label: 'All goods',
        },
        {
            label: 'Smartphones',
        },
        {
            label: 'Speakers',
        },
        {
            label: 'Columns',
        }

    ]);




    const Item = ({ title }) => {
        return (
            <ListRow onPress={() => console.log("View click")}  >
                <ListLabel >{title}</ListLabel>
            </ListRow>
        );
    }


    return (
        <Container>
            {/* //TODO FlatList buf */}
            <SafeAreaViewComponent style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <Item title={item.label} />}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaViewComponent>
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

const SafeAreaViewComponent = styled.SafeAreaView`
`;


const ListRow = styled.TouchableOpacity`
    flex:1;
    justify-content:flex-start;
    align-items:center;
    flex-direction:row;
    background: #FFFFFF;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    height: 77px;
    margin-bottom:16px;
    padding:0 24px;
`;

const ListLabel = styled.Text`
   font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color:#000;
`;

export default CategoriesScreen
