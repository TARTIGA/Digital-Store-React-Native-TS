import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

const CategoryFilters = ({}) => {
  const [filterByValue, setFilterByValue] = useState('Football');
  const [filterValue, setFilterValue] = useState('Filter1');
  const itemsArrayBy = [
    { label: 'By price ↑', value: 'bypriceup' },
    { label: 'By price ↓', value: 'bypricedown' },
  ];
  const itemsArrayFilter = [
    { label: 'Filter1', value: 'filter1' },
    { label: 'Filter2', value: 'filter2' },
  ];

  const handleChangeView = () => {
    Alert.alert('ChangeView');
  };
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
        items={itemsArrayBy}
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
        items={itemsArrayFilter}
        Icon={() => {
          return (
            <>
              <Ionicons name="ios-arrow-down" size={14} color="lightgrey" />
            </>
          );
        }}
      />
      <BtnChangeView onPress={handleChangeView}>
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
