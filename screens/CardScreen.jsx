import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Button } from 'app/components';
import { AuthContext } from 'app/context';

const CardScreen = ({ navigation, route }) => {
  // const { title = 'default' } = route.params;
  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerTitle: title || 'default' });
  // }, [navigation, route]);

  useEffect(() => {
    console.log(['navigation', navigation]);
  }, []);
  return (
    <Container>
      {/* <Text>{title || 'default'}</Text> */}
      <Text>{'default'}</Text>

      <Button handler={() => navigation.pop(1)} label={<Text>Pop</Text>} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export default CardScreen;
