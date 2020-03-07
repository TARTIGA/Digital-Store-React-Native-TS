import React from 'react';
import styled from 'styled-components/native';
//Use Context here
import theme from '../theme'

const CustomTextInput = (props) => {
    return (
        <TextInputContainer>
            <TextInputInner
                {...props}
            />
        </TextInputContainer>
    );
}
CustomTextInput.defaultProps = {
    event: null,
    value: 'value',
    bordColor: theme.palette.primary.main,
}

const TextInputContainer = styled.View`
 height:48px;
 width:100%;
 margin-bottom:10px;
`;

const TextInputInner = styled.TextInput`
 height:48px;
 border-color: ${props => props.bordColor};
 border-radius:20px;
 border-width:2px;
 padding:10px;
`;

export default CustomTextInput;