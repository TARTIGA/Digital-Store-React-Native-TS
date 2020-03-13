import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { Link, Dots } from 'app/components'
import { AuthContext } from 'app/context'
const PromoImg = require('app/assets/img/World.png')



const LargeScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    return (
        <Container >
            <ImageView>
                <Image
                    style={{ width: 256, height: 203 }}
                    source={PromoImg}
                />
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
     align-items:center;
     justify-content:center;
     margin-top:68;
`;


export default LargeScreen
