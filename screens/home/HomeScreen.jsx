import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { View, FlatList } from 'react-native'
import { Button, Slider } from 'app/components'
import { AuthContext } from 'app/context'
const ColumnSlide = require('app/assets/img/slides/Column.png')
const iPhone11Slide = require('app/assets/img/slides/iPhone11pro.png')
const LGGram17Slide = require('app/assets/img/slides/LGGram17.png')
const Surfacelaptop3Slide = require('app/assets/img/slides/Surfacelaptop3.png')

const Monitor = require('app/assets/img/products/Monitor.png')
const Smartphone = require('app/assets/img/products/Smartphone.png')
const XpsLaptop = require('app/assets/img/products/XpsLaptop.png')


import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { signOut } = useContext(AuthContext)
    const [images, setImages] = useState([
        ColumnSlide,
        iPhone11Slide,
        LGGram17Slide,
        Surfacelaptop3Slide
    ]);

    const [sellOuts, setSellOut] = useState([
        {
            label: 'Monitors',
            imgSrc: Monitor,
            key: 'Monitors',
        },
        {
            label: 'Smartphone',
            imgSrc: Smartphone,
            key: 'Smartphone',
        },
        {
            label: 'Laptops',
            imgSrc: XpsLaptop,
            key: 'Laptops',
        },
        {
            label: 'Columns',
            imgSrc: Smartphone,
            key: 'Columns',
        },
        {
            label: 'Phone',
            imgSrc: Monitor,
            key: 'Phone',
        },
        {
            label: 'Note',
            imgSrc: Smartphone,
            key: 'Note',
        },
    ]);

    const SellOutItem = ({ label, imgSrc }) => {
        return (
            <SellOutItemInner >
                <DiscountLabel>
                    <DiscountLabelText>-50%</DiscountLabelText>
                </DiscountLabel>
                <View style={{ height: 170, flex: 1, justifyContent: 'center' }}>
                    <ItemImage
                        source={imgSrc}
                    />
                </View>
                <View><ItemLabel>{label}</ItemLabel></View>
            </SellOutItemInner>
        );
    }


    return (
        <Container>
            <View >
                <Slider images={images} autoplay={true} timeout={3000} />
            </View>
            <ButtonsRow>
                <ButtonItem>
                    <Button
                        label={<FontAwesome name="list-ul" size={24} color="#0001FC" />}
                        bgColor={'#E0ECF8'}
                        bRadius={56}
                        height={56}
                        width={56}
                        handler={() => navigation.push('Categories')} />
                    <ButtonItemLabel>Categories</ButtonItemLabel>
                </ButtonItem>
                <ButtonItem>
                    <Button
                        label={<FontAwesome name="star-o" size={24} color="#0001FC" />}
                        bgColor={'#E0ECF8'}
                        bRadius={56}
                        height={56}
                        width={56}
                        handler={() => navigation.push('Favorites')} />
                    <ButtonItemLabel>Favorites</ButtonItemLabel>
                </ButtonItem>
                <ButtonItem>
                    <Button
                        label={<FontAwesome name="gift" size={24} color="#0001FC" />}
                        bgColor={'#E0ECF8'}
                        bRadius={56}
                        height={56}
                        width={56}
                        handler={() => navigation.push('Gifts')} />
                    <ButtonItemLabel>Gifts</ButtonItemLabel>
                </ButtonItem>
                <ButtonItem>
                    <Button
                        label={<FontAwesome name="crosshairs" size={24} color="#0001FC" />}
                        bgColor={'#E0ECF8'}
                        bRadius={56}
                        height={56}
                        width={56}
                        handler={() => navigation.push('Hits')} />
                    <ButtonItemLabel>Hits</ButtonItemLabel>
                </ButtonItem>
            </ButtonsRow>
            <SellOutView >
                <SellOutLabel>Sell-out</SellOutLabel>
                <FlatList
                    data={sellOuts}
                    columnWrapperStyle={{
                        justifyContent: "space-between", marginTop: 16, flexWrap: 'wrap',
                    }}
                    numColumns={2}
                    renderItem={({ item }) => <SellOutItem label={item.label} imgSrc={item.imgSrc} />}
                    keyExtractor={(item) => item.key}
                />
            </SellOutView>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    padding:20px;
`;

const ButtonsRow = styled.View`
    flex:0.5;
    justify-content:space-around;
    align-items:center;
    flex-direction:row;
`;

const ButtonItem = styled.View`
justify-content:center;
align-items:center;
`;

const ButtonItemLabel = styled.Text`
color:#1F53E4;
font-size: 14px;
line-height: 16px;
font-weight: 500;
text-align: center;
margin-top:6px;
`;

const SellOutView = styled.View`
flex:1;
`;


const SellOutLabel = styled.Text`
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
`;

const SellOutItemInner = styled.View`
flex:0.48;
min-height:100px;
background:#fff;
border-radius: 6px;
margin-bottom: 2px;
box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
align-items:center;
padding:16px;
`;

const DiscountLabel = styled.View`
width: 39px;
height: 22px;
background: #E0ECF8;
border-radius: 2px;
align-self:flex-start;
align-items:center;
justify-content:center;
`;

const DiscountLabelText = styled.Text`
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #1F53E4;
`;

const ItemImage = styled.Image`
    margin:20px 0;
`;

const ItemLabel = styled.Text`
font-weight: 600;
font-size: 16px;
line-height: 21px;
`;


export default HomeScreen
