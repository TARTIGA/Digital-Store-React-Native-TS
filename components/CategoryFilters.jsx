import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { filtersDefault, filtersByPrice } from 'app/store';
const CategoryFilters = ({ handleToggleChangeView }) => {
  const [filterByValue, setFilterByValue] = useState('Football');
  const [filterValue, setFilterValue] = useState('Filter1');

  return (
    <View style={{ flexDirection: 'row' }}>
      <RNPickerSelect
        placeholder={{}}
        value={filterByValue}
        style={{
          ...pickerSelectStyles,
          inputAndroid: {
            backgroundColor: 'transparent',
          },
          iconContainer: {
            top: '35%',
            right: 10,
          },
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => setFilterByValue(value)}
        items={filtersByPrice}
        Icon={() => {
          return (
            <>
              <Ionicons name="ios-arrow-down" size={14} color="lightgrey" />
            </>
          );
        }}
      />
      <RNPickerSelect
        placeholder={{}}
        value={filterValue}
        style={{
          ...pickerSelectStyles,
          inputAndroid: {
            backgroundColor: 'transparent',
          },
          iconContainer: {
            top: '35%',
            right: 10,
          },
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => setFilterValue(value)}
        items={filtersDefault}
        Icon={() => {
          return (
            <>
              <Ionicons name="ios-arrow-down" size={14} color="lightgrey" />
            </>
          );
        }}
      />
      <BtnChangeView onPress={handleToggleChangeView}>
        <FontAwesome5 name="table" size={24} color="lightgrey" />
      </BtnChangeView>
    </View>
  );
};

CategoryFilters.defaultProps = {};

const BtnChangeView = styled.TouchableOpacity`
  flex: 1;
  height: 48;
  justify-content: center;
  align-items: center;
`;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 150,
    height: 48,
    fontSize: 14,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#A7A9BE',
    borderRadius: 4,
    color: '#A7A9BE',
  },
  inputAndroid: {
    width: 150,
    height: 48,
    fontSize: 14,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#A7A9BE',
    borderRadius: 4,
    color: '#A7A9BE',
  },
});

export default CategoryFilters;
