// @flow
import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import type { Node } from 'react';
import showAlert from 'app/helpers/showAlert';
import { FlatList } from 'react-native';


const FavoritesScreen = ({ navigation }):Node => {
  const dispatch = useDispatch();
  const favoritesItems = useSelector((state) => state.favorites.items);
  useEffect(() => {
    console.log(['favoritesItems', favoritesItems]);
    showAlert('favoritesItems', JSON.stringify(favoritesItems));
  }, []);
  const Item = ({ label }) => {
    //TODO: create LIST component
    return (
      <ListRow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,

          elevation: 3,
        }}
      >
        <ListRowInner
          onPress={() => showAlert('item name', label)}
        >
          <ListLabel>{label}</ListLabel>
        </ListRowInner>
      </ListRow>
    );
  };
  return (
    <Container>
        <FlatList
        data={favoritesItems}
        renderItem={({ item }) => <Item label={item.label} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

const ListRow = styled.View`
  /*TODO: IMPORTANT !!! DONT USE FLEX property HERE */
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 6px;
  height: 77px;
  margin-bottom: 16px;
  padding: 0 24px;
`;

const ListRowInner = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ListLabel = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000;
`;

export default FavoritesScreen;
