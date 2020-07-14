// @flow
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Link, Dots } from 'app/components';
import { AuthContext } from 'app/context';
const PromoImg = require('app/assets/img/Digital.png');

const ExclusivityScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  return (
    <Container>
      <ImageView>
        <Image style={{ width: 256, height: 256 }} source={PromoImg} />
      </ImageView>
      <PromoTextBlock>
        <PromoLabel>Exclusivity</PromoLabel>
      </PromoTextBlock>
      <Dots checkedIndex={1} />
      <SkipLinkView>
        <Link
          text="next"
          fontSize={'18px'}
          handler={() => navigation.push('PriceScreen')}
        />
      </SkipLinkView>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const PromoTextBlock = styled.View`
  text-align: center;
  align-items: center;
  margin-top: 72px;
`;

const PromoLabel = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const SkipLinkView = styled.View`
  text-align: center;
  align-items: center;
  margin-top: 48px;
`;

const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 68;
`;

export default ExclusivityScreen;
