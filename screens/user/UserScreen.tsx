import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { AuthContext } from 'app/context';
import { Link, Button, CustomTextInput } from 'app/components';

const UserScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <Container>
      <Text>UserScreen</Text>
      <CustomTextInput
        value={null}
        placeholder={'Name'}
        placeholderTextColor={'blue'}
        selectionColor={'#000'}
        autoCompleteType={'username'}
        onChangeText={() => {}}
        bordColor={'blue'}
      />
      <CustomTextInput
        value={null}
        placeholder={'Email'}
        placeholderTextColor={'blue'}
        selectionColor={'#000'}
        autoCompleteType={'email'}
        onChangeText={() => {}}
        bordColor={'blue'}
      />
      <CustomTextInput
        value={null}
        placeholder={'Password'}
        placeholderTextColor={'blue'}
        selectionColor={'#000'}
        autoCompleteType={'password'}
        onChangeText={() => {}}
        bordColor={'blue'}
      />
      <ButtonView>
        <Button handler={() => signOut()} label={<Text>Sign Out</Text>} />
      </ButtonView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
const ButtonView = styled.View`
  margin-top: 32px;
  width: 100%;
`;
export default UserScreen;
