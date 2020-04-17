import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { View, FlatList } from 'react-native';
import { Slider, SellOutItem, RoundBtn } from 'app/components';
import { AuthContext } from 'app/context';
import {
  ColumnSlide,
  iPhone11Slide,
  LGGram17Slide,
  Surfacelaptop3Slide,
} from 'app/store/slides';

import { selloutsStore } from 'app/store';
import { default as homebtns } from 'app/store/homebtns';

const HomeScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const [images, setImages] = useState([
    ColumnSlide,
    iPhone11Slide,
    LGGram17Slide,
    Surfacelaptop3Slide,
  ]);

  const [sellOuts, setSellOut] = useState(selloutsStore);
  const selloutsTitle = 'Sell-out';

  return (
    <Container>
      <View>
        <Slider images={images} autoplay={true} timeout={3000} />
      </View>
      <ButtonsRow>
        {homebtns.map((item, idx) => (
          <RoundBtn key={idx.toString()} item={item} />
        ))}
      </ButtonsRow>
      <SellOutView>
        <SellOutLabel>{selloutsTitle}</SellOutLabel>
        <FlatList
          data={sellOuts}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginTop: 16,
            flexWrap: 'wrap',
          }}
          numColumns={2}
          renderItem={({ item }) => <SellOutItem item={item} />}
          keyExtractor={(item) => item.key}
        />
      </SellOutView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ButtonsRow = styled.View`
  flex: 0.5;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const SellOutView = styled.View`
  flex: 1;
`;

const SellOutLabel = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

export default HomeScreen;
