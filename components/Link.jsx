import React from 'react'
//Use Context here
import theme from '../theme'
import styled from 'styled-components/native';

const Link = ({ text, color, fontSize, handler }) => {
    return (
        <LinkContainer
            onPress={handler}
            color={color}
            fontSize={fontSize}
        >
            {text}
        </LinkContainer>
    )
}
Link.defaultProps = {
    handler: null,
    color: theme.palette.secondary.main,
    fontSize: '18px',
    text: 'DEFAULT LINK'
}
const LinkContainer = styled.Text`
    color: ${props => props.color};
    font-weight:600;
    font-size: ${props => props.fontSize};
    line-height:48px;
`;


export default Link;
