import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Button } from 'app/components';
import { AuthContext } from 'app/context';

const BasketScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <Text>BasketScreen</Text>
      <Button handler={() => signOut()} label={<Text>Sign Out</Text>} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export default BasketScreen;
