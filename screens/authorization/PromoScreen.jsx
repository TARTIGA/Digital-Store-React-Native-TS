import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Link, Dots, Slider } from 'app/components'
import { AuthContext } from 'app/context'
const WorldSlide = require('app/assets/img/World.png')
const DigitalSlide = require('app/assets/img/Digital.png')
const PriceSlide = require('app/assets/img/Price.png')


const LargeScreen = ({ navigation }) => {
    const [images, setImages] = useState([
        WorldSlide,
        DigitalSlide,
        PriceSlide,
    ]);
    return (
        <Container >
            <ImageView>
                <Slider images={images} autoplay={false} />
            </ImageView>
            <PromoTextBlock>
                <PromoLabel>Large</PromoLabel>
            </PromoTextBlock>
            <Dots checkedIndex={0} />
            <SkipLinkView>
                <Link text="next" fontSize={'18px'} handler={() => navigation.push('ExclusivityScreen')} />
            </SkipLinkView>
        </Container>
    );
}

const Container = styled.View`
        align-items:center;
        justify-content:center;
        flex:1;
        `;


const PromoTextBlock = styled.View`
text-align:center;
align-items:center;
margin-top:88px;
`;

const PromoLabel = styled.Text`
font-size: 24px;
color:#fff;
`;

const SkipLinkView = styled.View`
text-align:center;
align-items:center;
margin-top:48px;
`;

const ImageView = styled.View`
     flex:1;
     align-items:center;
     justify-content:center;
     margin-top:68;
     background-color:#ffffff;
`;


export default LargeScreen
