import React from 'react'
import styled from 'styled-components/native';

const Button = ({ children, bgColor, width, event }) => {
    return (
        <ButtonContainer bgColor={bgColor} width={width} >
            <ButtonInside onPress={event} >
                <ButtonText>{children}</ButtonText>
            </ButtonInside>
        </ButtonContainer>
    )
}
Button.defaultProps = {
    event: null,
    bgColor: '#db7093',
    width: '100%',
}

const ButtonContainer = styled.View`
    background:${props => props.bgColor};
    height:45px;
    border-radius:30px;
    width:${props => props.width};
    margin-top:20px;
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
