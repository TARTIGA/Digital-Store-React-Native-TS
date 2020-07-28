import React from 'react';
import theme from '../theme';
import styled from 'styled-components/native';
import { Button } from 'app/components';
import { FontAwesome } from '@expo/vector-icons';
import type { Node } from 'react';
import type { TItemHandler } from '../types/core';

const RoundBtn = ({ item, handler }: TItemHandler): Node => {
  const { icon, label } = item;
  return (
    <ButtonItem>
      <Button
        label={
          <FontAwesome
            name={icon}
            size={24}
            color={theme.palette.primary.main}
          />
        }
        bgColor={theme.palette.primary.light}
        bRadius={56}
        height={56}
        width={56}
        handler={handler}
      />
      <ButtonItemLabel>{label}</ButtonItemLabel>
    </ButtonItem>
  );
};

RoundBtn.defaultProps = {};

const ButtonItem = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonItemLabel = styled.Text`
  color: #1f53e4;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  margin-top: 6px;
`;

export default RoundBtn;
