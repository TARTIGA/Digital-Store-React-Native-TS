// @flow
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const FavoritesScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>FavoritesScreen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

export default FavoritesScreen;
