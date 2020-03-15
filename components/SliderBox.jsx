import React from 'react'
import { SliderBox } from "react-native-image-slider-box";


const SliderBoxComponent = ({ images }) => {
    return (
        <SliderBox images={images}
            sliderBoxHeight={110}
            dotColor="#A7A9BE"
            inactiveDotColor="lightgray"
            dotStyle={{
                width: 6,
                height: 6,
                borderRadius: 6,
                marginHorizontal: 0,
                padding: 0,
                margin: 0
            }}
            parentWidth={340}
            paginationBoxStyle={{
                position: "absolute",
                bottom: -24,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '100%' }}
            resizeMode={'contain'}
            imageLoadingColor="#2196F3"
            autoplay={3000}
            circleLoop
        />
    )
}


export default SliderBoxComponent;