import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Button, Slider } from 'app/components';
import { AuthContext } from 'app/context';
import theme from 'app/theme';

const CardScreen = ({ navigation, route }) => {
  //TODO: для слайдера нужно делать перезапрос на imgs -> пока костыль
  const { label, imgSrc } = route.params.item;
  const slides = [imgSrc, imgSrc, imgSrc];

  useEffect(() => {
    console.log(['navigation', navigation]);
    console.log(['route', route]);
  }, []);
  return (
    <Container>
      <View>
        <Text>{label || 'default'}</Text>
      </View>
      <ProductContainer>
        <Slider images={slides} autoplay={false} />
      </ProductContainer>
      <Row>
        <Text>Color</Text>
      </Row>
      <Row>
        <View>
          <Text>*</Text>
        </View>
        <View>
          <Text>*</Text>
        </View>
        <View>
          <Text>*</Text>
        </View>
      </Row>
      <Row>
        <Text>Memory</Text>
      </Row>
      <Row>
        <View>
          <Text>64 gb</Text>
        </View>
        <View>
          <Text>256 gb</Text>
        </View>
        <View>
          <Text>512 gb</Text>
        </View>
      </Row>
      {/* <Button handler={() => navigation.pop(1)} label={<Text>Pop</Text>} /> */}
      <Button
        bgColor={theme.palette.primary.main}
        textColor={theme.palette.secondary.main}
        handler={() => {}}
        label={<Text>Add to Basket</Text>}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
const ProductContainer = styled.View`
  flex-direction: row;
  border: 1px solid blue;
  padding: 20px;
  margin-bottom: 20px;
`;
const Row = styled.View`
  flex-direction: row;
  border: 1px solid red;
`;

export default CardScreen;
