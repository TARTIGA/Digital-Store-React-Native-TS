// @flow
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Text, Image, View } from 'react-native';
import { Link, Button } from 'app/components';
import { AuthContext } from 'app/context';
import { FontAwesome } from '@expo/vector-icons';

const AutorizationScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  return (
    <Container>
      <ButtonView>
        <Button
          handler={() => navigation.push('CreateAccountScreen')}
          label={<Text>Create account</Text>}
        />
        <SocialBtnView>
          <Button
            label={<Text>Sign In</Text>}
            icon={<FontAwesome name="google" size={24} color="red" />}
            handler={() => signIn('token')}
          />
          <Button
            bgColor={'#415A93'}
            textColor={'#fff'}
            label={<Text>Sign In</Text>}
            icon={<FontAwesome name="facebook" size={24} color="#fff" />}
            handler={() => signIn('token')}
          />
        </SocialBtnView>
      </ButtonView>
      <LinkView>
        <Link
          text="Already have an account? Sign In"
          fontSize={'16px'}
          color={'#FBDF00'}
          fontWeight={300}
          handler={() => navigation.push('SignInScreen')}
        />
      </LinkView>
      <SkipLinkView>
        <Link
          text="Skip Registration"
          fontSize={'18px'}
          handler={() => signIn('token')}
        ></Link>
      </SkipLinkView>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled.View`
  margin-top: 68;
  width: 100%;
`;

const SocialBtnView = styled.View`
  margin-top: 32;
`;

const LinkView = styled.View`
  text-align: center;
  align-items: center;
  margin-top: 48px;
`;

const SkipLinkView = styled(LinkView)`
  margin-top: 48px;
`;

export default AutorizationScreen;
