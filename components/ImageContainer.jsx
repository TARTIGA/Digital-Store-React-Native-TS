import React from 'react';
import styled from 'styled-components/native';

const ImageContainer = ({ height, children }) => {
  return <ImageWrapper height={height}>{children}</ImageWrapper>;
};
ImageContainer.defaultProps = {
  height: 100,
};

const ImageWrapper = styled.View`
  height: ${(props) => props.height};
  width: 100;
  justify-content: center;
  align-items: center;
`;

export default ImageContainer;
