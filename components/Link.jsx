import React from 'react'
//Use Context here
import theme from '../theme'
import styled from 'styled-components/native';

const Link = ({ text, color, fontSize, fontWeight, handler }) => {
    return (
        <LinkContainer
            onPress={handler}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
        >
            {text}
        </LinkContainer>
    )
}
Link.defaultProps = {
    handler: null,
    color: theme.palette.secondary.main,
    fontSize: '18px',
    fontWeight: 600,
    text: 'DEFAULT LINK'
}
const LinkContainer = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight:${props => props.fontWeight};
    line-height:48px;
`;


export default Link;
