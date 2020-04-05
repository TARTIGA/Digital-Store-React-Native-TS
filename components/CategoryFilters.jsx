import React, { useState } from 'react';
import { Image, View, Text, Picker } from 'react-native';
import { Button } from 'app/components';
import styled from 'styled-components/native';

const CategoryFilters = ({}) => {
  const [selectedValue, setSelectedValue] = useState('java');
  const [filterValue, setFilterValue] = useState('filter');
  return (
    <View style={{ flexDirection: 'row' }}>
      <Picker
        selectedValue={selectedValue}
        style={{ width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <View>
        <Picker
          selectedValue={filterValue}
          style={{ width: 150 }}
          onValueChange={(itemValue, itemIndex) => setFilterValue(itemValue)}
        >
          <Picker.Item label="filter" value="filter" />
          <Picker.Item label="filter2" value="filter2" />
        </Picker>
      </View>
      <View>
        <Text>sdfsd</Text>
      </View>
    </View>
  );
};

CategoryFilters.defaultProps = {};

export default CategoryFilters;
