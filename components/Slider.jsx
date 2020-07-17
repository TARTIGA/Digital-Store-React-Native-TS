// @flow
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import type { TSlider} from '../types/core';
import type { Node } from 'react';

const Slider = ({
  images,
  dotted,
  timeout,
  autoplay,
  loop,
  parentWidth,
  resizeMode,
}:TSlider):Node => {
  return (
    <SliderBox
      images={images}
      sliderBoxHeight={110}
      dotColor="#A7A9BE"
      inactiveDotColor="lightgray"
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 6,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        display: dotted ? 'block' : 'none',
      }}
      parentWidth={parentWidth}
      paginationBoxStyle={{
        position: 'absolute',
        bottom: -24,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
      ImageComponentStyle={{ borderRadius: 15, width: '100%' }}
      resizeMode={resizeMode}
      imageLoadingColor="#2196F3"
      autoplay={autoplay ? timeout : autoplay}
      circleLoop={loop}
    />
  );
};
Slider.defaultProps = {
  dotted: true,
  timeout: 3000,
  autoplay: false,
  loop: true,
  parentWidth: 340,
  resizeMode: 'contain',
};

export default Slider;
