import React from 'react'
import styled from 'styled-components/native';
//Use Context here
import theme from '../theme'

const Button = ({ children, bgColor, width, handler, disabled }) => {
    return (
        <ButtonContainer bgColor={bgColor} width={width} disabled={disabled}>
            <ButtonInside onPress={handler} disabled={disabled}>
                <ButtonText>{children}</ButtonText>
            </ButtonInside>
        </ButtonContainer>
    )
}
Button.defaultProps = {
    event: null,
    bgColor: theme.palette.primary.main,
    width: '100%',
    disabled: false
}

const ButtonContainer = styled.View`
    background:${props => props.bgColor};
    height:45px;
    border-radius:30px;
    width:${props => props.width};
    margin-top:20px;
    opacity:${props => props.disabled ? 0.5 : 1};
`;

const ButtonInside = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const ButtonText = styled.Text`
    color:#fff;
    font-weight:500;
    font-size:16px;
`;

export default Button;
