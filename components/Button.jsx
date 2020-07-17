// @flow
import React from 'react';
import styled from 'styled-components/native';
//Use Context here
import theme from 'app/theme';
import { Text } from 'react-native';
import type { TButton} from '../types/core';
import type { Node } from 'react';

// TODO: REFACTOR THIS ?//

const Button = ({
  bgColor,
  bRadius,
  width,
  height,
  handler,
  disabled,
  textColor,
  label,
  icon,
}:TButton):Node => {
  return (
    <ButtonContainer
      bgColor={bgColor}
      width={width}
      height={height}
      disabled={disabled}
      bRadius={bRadius}
    >
      <ButtonInside onPress={handler} disabled={disabled}>
        {icon ? (
          <BtnContainerWithIcon>
            {icon}
            <ButtonText textColor={textColor}>{label}</ButtonText>
            <Text />
          </BtnContainerWithIcon>
        ) : (
          <ButtonText textColor={textColor}>{label}</ButtonText>
        )}
      </ButtonInside>
    </ButtonContainer>
  );
};
Button.defaultProps = {
  event: null,
  bgColor: theme.palette.secondary.main,
  width: '100%',
  height: 48,
  disabled: false,
  textColor: theme.palette.primary.main,
  icon: null,
  label: null,
  bRadius: 0,
};

const ButtonContainer = styled.View`
  background: ${(props) => props.bgColor};
  height: ${(props) => props.height};
  border-radius: 4px;
  width: ${(props) => props.width};
  margin-top: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: ${(props) => props.bRadius};
`;

const ButtonInside = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const BtnContainerWithIcon = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.textColor};
  font-weight: 500;
  font-size: 18px;
`;

export default Button;
