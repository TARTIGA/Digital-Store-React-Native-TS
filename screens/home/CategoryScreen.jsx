import React, { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { FlatList, Image, View, Text, Alert } from 'react-native';
import { AuthContext } from 'app/context';
import { ImageContainer, CategoryFilters } from 'app/components';

const Monitor = require('app/assets/img/products/Monitor.png');
const Smartphone = require('app/assets/img/products/Smartphone.png');
const XpsLaptop = require('app/assets/img/products/XpsLaptop.png');

const CategoryScreen = ({ navigation, route }) => {
  const defaultColumnStyle = {
    justifyContent: 'space-between',
    marginTop: 16,
    flexWrap: 'wrap',
  };
  const [columnWrapperStyle, setColumnWrapperStyle] = useState(
    defaultColumnStyle
  );
  const [numColumns, setNumColumns] = useState(2);
  const { signOut } = useContext(AuthContext);
  const { title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: title });
  }, [navigation, route]);

  const [items, setItems] = useState([
    {
      label: 'Surface laptop 3',
      imgSrc: Monitor,
      price: '123 000',
      key: 'Monitors',
    },
    {
      label: 'XPS laptop 13',
      imgSrc: Smartphone,
      price: '123 000',
      key: 'Smartphone',
    },
    {
      label: 'LG Gram 17',
      imgSrc: XpsLaptop,
      price: '123 000',
      key: 'Laptops',
    },
    {
      label: 'Macbook pro 13',
      imgSrc: Smartphone,
      price: '123 000',
      key: 'Columns',
    },
    {
      label: 'Phone',
      imgSrc: Monitor,
      price: '123 000',
      key: 'Phone',
    },
    {
      label: 'Note',
      imgSrc: Smartphone,
      price: '123 000',
      key: 'Note',
    },
    {
      label: 'Monitors',
      imgSrc: Monitor,
      key: 'Monitors2',
    },
    {
      label: 'Smartphone',
      imgSrc: Smartphone,
      key: 'Smartphone2',
    },
    {
      label: 'Laptops',
      imgSrc: XpsLaptop,
      key: 'Laptops2',
    },
    {
      label: 'Columns',
      imgSrc: Smartphone,
      key: 'Columns2',
    },
    {
      label: 'Phone',
      imgSrc: Monitor,
      key: 'Phone2',
    },
    {
      label: 'Note',
      imgSrc: Smartphone,
      key: 'Note2',
    },
  ]);

  const Item = ({ item }) => {
    const { label, imgSrc, price } = item;
    return (
      <ItemInner numColumns={numColumns}>
        <ImageContainer height={100}>
          <Image
            source={imgSrc || null}
            alt={label || 'Default'}
            style={{
              resizeMode: 'contain',
              height: 100,
            }}
          />
        </ImageContainer>
        <LabelRow>
          <ItemLabel>{label || 'Default'}</ItemLabel>
        </LabelRow>
        <PriceLabel>
          <PriceText>{`${price || 'not'} $`} </PriceText>
        </PriceLabel>
      </ItemInner>
    );
  };

  const handleToggleChangeView = () => {
    if (numColumns === 2) {
      setColumnWrapperStyle(null);
      setNumColumns(1);
    } else {
      setColumnWrapperStyle(defaultColumnStyle);
      setNumColumns(2);
    }
  };

  return (
    <Container>
      <CategoryFilters handleToggleChangeView={handleToggleChangeView} />
      <FlatList
        data={items}
        columnWrapperStyle={columnWrapperStyle}
        numColumns={numColumns}
        key={'key' + numColumns}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ItemInner = styled.View`
  flex: ${(props) => (props.numColumns === 2 ? 0.48 : 1)};
  height: ${(props) => (props.numColumns === 2 ? '196px' : '300px')};
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 16px;
`;

const PriceLabel = styled.View`
  height: 22px;
  border-radius: 2px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;

const LabelRow = styled.View`
  margin-top: 38px;
  border-radius: 2px;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`;

const PriceText = styled.Text`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #1f53e4;
`;

const ItemLabel = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
`;

export default CategoryScreen;
