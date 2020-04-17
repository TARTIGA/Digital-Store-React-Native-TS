import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { categoriesStore } from 'app/store';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setcategories] = useState(categoriesStore);

  const Item = ({ title }) => {
    return (
      <ListRow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,

          elevation: 3,
        }}
      >
        <ListRowInner
          onPress={() => navigation.push('Category', { title: title })}
        >
          <ListLabel>{title}</ListLabel>
        </ListRowInner>
      </ListRow>
    );
  };

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Item title={item.label} />}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 0;
`;

const ListRow = styled.View`
  /*TODO: IMPORTANT !!! DONT USE FLEX property HERE */
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 6px;
  height: 77px;
  margin-bottom: 16px;
  padding: 0 24px;
`;

const ListRowInner = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ListLabel = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000;
`;

export default CategoriesScreen;
