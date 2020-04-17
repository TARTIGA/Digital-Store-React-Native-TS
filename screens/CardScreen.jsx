import React, { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Button } from 'app/components';
import { AuthContext } from 'app/context';

const CardScreen = ({ navigation, route }) => {
  const { title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: title });
  }, [navigation, route]);
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export default CardScreen;
