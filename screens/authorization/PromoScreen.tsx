import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Link, Dots, Slider } from 'app/components';
import { AuthContext } from 'app/context';
const WorldSlide = require('app/assets/img/World.png');
const DigitalSlide = require('app/assets/img/Digital.png');
const PriceSlide = require('app/assets/img/Price.png');

const PromoScreen = ({ navigation }) => {
  const [images, setImages] = useState([WorldSlide, DigitalSlide, PriceSlide]);
  console.log(Slider);
  return (
    <Container>
      <ImageView>
        <Slider
          images={images}
          autoplay={false}
          dotted={true}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          currentImageEmitter={(index) =>
            console.warn(`current pos is: ${index}`)
          }
        />
      </ImageView>
      <PromoTextBlock>
        <PromoLabel>Large11</PromoLabel>
      </PromoTextBlock>
      <SkipLinkView>
        <Link
          text="next"
          fontSize={'18px'}
          handler={() => navigation.push('ExclusivityScreen')}
        />
      </SkipLinkView>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const PromoTextBlock = styled.View`
  text-align: center;
  align-items: center;
  margin-top: 88px;
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
  flex: 0.7;
  align-items: center;
  justify-content: center;
  margin-top: 68;
  background-color: #ffffff;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin: 10% 0;
`;

export default PromoScreen;
