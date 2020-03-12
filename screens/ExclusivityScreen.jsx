import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Link, Dots } from '../components'
import { AuthContext } from '../context'
const PromoImg = require('../assets/img/Digital.png')


const ExclusivityScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <ImageView>
                <Image
                    style={{ width: 216, height: 216 }}
                    source={PromoImg}
                />
            </ImageView>
            <PromoTextBlock>
                <PromoLabel>Exclusivity</PromoLabel>
            </PromoTextBlock>
            <Dots checkedIndex={1} />
            <LinkView>
                <Link text="next" fontSize={'18px'} handler={() => navigation.push('PriceScreen')} />
            </LinkView>
        </Container>
    );
}

const Container = styled.View`
        flex: 1;
        padding:32px;
        background-color:#0001FC;
        justify-content:center;
        align-items:center;
        `;

const PromoTextBlock = styled.View`
text-align:center;
align-items:center;
margin-top:72px;
`;

const PromoLabel = styled.Text`
font-size: 24px;
color:#fff;
`;

const LinkView = styled.View`
text-align:center;
align-items:center;
margin-top:72px;
`;

const ImageView = styled.View`
     align-items:center;
     justify-content:center;
     margin-top:68;
`;


export default ExclusivityScreen
