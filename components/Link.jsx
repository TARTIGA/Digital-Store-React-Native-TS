import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Link = ({ text, color, event }) => {
    return (
        <LinkContainer
            onPress={event}
        >
            <TextContent color={color}>{text}</TextContent>
        </LinkContainer>
    )
}
Link.defaultProps = {
    event: null,
    color: '#db7093',
    text: 'DEFAULT LINK'
}
const LinkContainer = styled.TouchableOpacity`
 height:48px;
`;

const TextContent = styled.Text`
     color: ${props => props.color};
     font-weight:600;
`;

export default Link;
