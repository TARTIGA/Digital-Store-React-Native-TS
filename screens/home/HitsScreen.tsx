import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const HitsScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>HitsScreen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

export default HitsScreen;
