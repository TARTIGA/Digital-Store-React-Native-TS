// @flow
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const GiftsScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>GiftsScreen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

export default GiftsScreen;
