import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, Image } from 'react-native'
import { Button, Slider } from 'app/components'
import { AuthContext } from 'app/context'
const ColumnSlide = require('app/assets/img/slides/Column.png')
const iPhone11Slide = require('app/assets/img/slides/iPhone11pro.png')
const LGGram17Slide = require('app/assets/img/slides/LGGram17.png')
const Surfacelaptop3Slide = require('app/assets/img/slides/Surfacelaptop3.png')

const Monitor = require('app/assets/img/products/Monitor.png')
const Smartphone = require('app/assets/img/products/Smartphone.png')

import { FontAwesome } from '@expo/vector-icons';

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
                <Grid>
                    <Item >
                        <DiscountLabel>
                            <DiscountLabelText>-50%</DiscountLabelText>
                        </DiscountLabel>
                        <View>
                            <ItemImage
                                style={{ width: 61, height: 130 }}
                                source={Smartphone}
                            />
                        </View>
                        <View><ItemLabel>Smartphones</ItemLabel></View>
                    </Item>
                    <Item >
                        <DiscountLabel><Text>-50%</Text></DiscountLabel>
                        <View>
                            <ItemImage
                                style={{ width: 97, height: 130 }}
                                source={Monitor}
                            />
                        </View>
                        <View><ItemLabel>Monitors</ItemLabel></View>
                    </Item>
                </Grid>
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
margin-top:6;
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

const Grid = styled.View`
flex:1;
width:100%;
margin-top:16;
justify-content:space-between;
flex-direction:row;
flex-wrap:wrap;
`;

const Item = styled.View`
width: 48%;
height: 100%;
background:#fff;
border-radius: 6px;
margin-bottom: 2%;
box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.04);
justify-content:space-around;
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

`;

const ItemLabel = styled.Text`
font-weight: 500;
font-size: 18px;
line-height: 21px;
`;


export default HomeScreen
