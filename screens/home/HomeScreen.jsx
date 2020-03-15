import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native'
import { Button, Slider } from 'app/components'
import { AuthContext } from 'app/context'
const ColumnSlide = require('app/assets/img/slides/Column.png')
const iPhone11Slide = require('app/assets/img/slides/iPhone11pro.png')
const LGGram17Slide = require('app/assets/img/slides/LGGram17.png')
const Surfacelaptop3Slide = require('app/assets/img/slides/Surfacelaptop3.png')


const HomeScreen = ({ navigation }) => {
    const { signOut } = useContext(AuthContext)
    const [images, setImages] = useState([
        ColumnSlide,
        iPhone11Slide,
        LGGram17Slide,
        Surfacelaptop3Slide
    ]);
    return (
        <Container>
            <View >
                <Slider images={images} autoplay={false} />
            </View>
            <Button handler={() => navigation.push('Categories')} label={<Text>Categories</Text>} />
            <View style={{ backgroundColor: 'red', flex: 1 }} />
        </Container>
    );
}

const Container = styled.View`
flex: 1;
padding:20px;
`;

export default HomeScreen
