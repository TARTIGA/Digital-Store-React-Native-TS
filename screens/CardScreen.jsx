import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Button, Slider } from 'app/components';
import { AuthContext } from 'app/context';
import { increment } from '../actions/counter';
import { addToBasket } from '../actions/basket';
import theme from 'app/theme';

const CardScreen = ({ navigation, route }) => {
  //TODO: для слайдера нужно делать перезапрос на imgs -> пока костыль
  ///////////////////
  const counter = useSelector((state) => state.counter);
  ////////////////////
  const [activeIdx, setActiveIdx] = useState(0);
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const basketItems = useSelector((state) => state.basket.items);
  const { item } = route.params;
  const { label, imgSrc } = route.params.item;
  const slides = [imgSrc, imgSrc, imgSrc];
  const itemParams = {
    slides,
    colors: {
      label: 'Colors',
      list: ['#52514F', '#EBEBE4', '#6F7972', '#F5D8C0'],
    },
    memory: {
      label: 'Memory',
      list: ['64', '256', '512'],
    },
  };

  useEffect(() => {
    console.log(['navigation', navigation]);
    console.log(['route', route]);
    console.log('LOG: CardScreen -> films', films);
    console.log('LOG: CardScreen -> counter', counter);

    console.log('LOG: CardScreen -> increment', increment);
  }, []);

  const handlerAddToBasket = (item) => {
    dispatch(addToBasket(item));
  };
  return (
    <Container>
      <View>
        <MainHeader>{label || 'default'}</MainHeader>
      </View>
      <ProductContainer>
        <Hightlight>
          <HightlightLabel>New</HightlightLabel>
        </Hightlight>
        <Slider images={itemParams.slides} autoplay={false} />
      </ProductContainer>
      <Row>
        <LabelParams>Color</LabelParams>
      </Row>
      <ColorPicker>
        {itemParams &&
          itemParams.colors.list.map((item, idx) => (
            <ColorItem
              key={item + idx.toString()}
              background={item}
              active={activeIdx === idx}
            />
          ))}
      </ColorPicker>
      <Row>
        <LabelParams>Memory</LabelParams>
      </Row>
      <MemoryPicker>
        {itemParams &&
          itemParams.memory.list.map((item, idx) => (
            <MemoryItem key={item + idx.toString()}>
              <MemoryItemLabel active={activeIdx === idx}>
                {item}
              </MemoryItemLabel>
            </MemoryItem>
          ))}
      </MemoryPicker>
      {/* <Button handler={() => navigation.pop(1)} label={<Text>Pop</Text>} /> */}
      <Button
        bgColor={theme.palette.primary.main}
        textColor={theme.palette.secondary.main}
        handler={() => handlerAddToBasket(item)}
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
  padding: 20px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Hightlight = styled.View`
  display: flex;
  position: absolute;
  background-color: #e0ecf8;
  padding: 3px 5px;
`;

const HightlightLabel = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #0001fc;
`;

const Row = styled.View`
  flex-direction: row;
`;

const MainHeader = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

const ColorPicker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const ColorItem = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.background || '#000'};
  border-radius: 36px;
  margin-left: 16px;
  border-width: 3px;
  border-color: ${(props) => (props.active ? '#0001FC' : 'transparent')};
`;

const MemoryPicker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const MemoryItem = styled.TouchableOpacity`
  margin-left: 4px;
  height: 42px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MemoryItemLabel = styled.Text`
  color: ${(props) => (props.active ? '#0001FC' : '#a7a9be')};
  font-size: 18px;
  font-weight: ${(props) => (props.active ? 700 : 500)};
`;

const LabelParams = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  padding-bottom: 24px;
`;

export default CardScreen;
