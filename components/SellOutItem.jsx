import React from 'react';
import theme from '../theme';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { ImageContainer } from 'app/components';

const SellOutItem = ({ item }) => {
  const { label, imgSrc, discount } = item;
  return (
    <SellOutItemInner>
      <DiscountLabel>
        <DiscountLabelText>{discount}</DiscountLabelText>
      </DiscountLabel>
      <ImageContainer height={180}>
        <Image source={imgSrc} />
      </ImageContainer>
      <View>
        <ItemLabel>{label}</ItemLabel>
      </View>
    </SellOutItemInner>
  );
};

SellOutItem.defaultProps = {};
const SellOutItemInner = styled.View`
  flex: 0.48;
  min-height: 100px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 2px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 16px;
`;

const DiscountLabel = styled.View`
  width: 39px;
  height: 22px;
  background: ${theme.palette.primary.light};
  border-radius: 2px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;

const DiscountLabelText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${theme.palette.primary.main};
`;
const ItemLabel = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
`;

export default SellOutItem;
