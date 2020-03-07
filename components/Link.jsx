import React from 'react'
//Use Context here
import theme from '../theme'
import styled from 'styled-components/native';

const Link = ({ text, color, handler }) => {
    return (
        <LinkContainer
            onPress={handler}
            color={color}
        >
            {text}
        </LinkContainer>
    )
}
Link.defaultProps = {
    handler: null,
    color: theme.palette.primary.main,
    text: 'DEFAULT LINK'
}
const LinkContainer = styled.Text`
    color: ${props => props.color};
    font-weight:600;
`;


export default Link;
