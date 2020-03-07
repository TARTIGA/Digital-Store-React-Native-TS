import React, { useContext, useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { Link, CustomTextInput, Button } from '../components'
import { AuthContext } from '../context'
import WaterfallImage from '../assets/waterfall.svg'
import SvgUri from 'react-native-svg-uri';



const AutorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <ImageBlock>
                <SvgUri
                    width="200"
                    height="200"
                    source={WaterfallImage}
                />
                <ImageLabel>Nature inc.</ImageLabel>
            </ImageBlock>
            <AuthorizationBlock>
                <CustomTextInput value={login} placeholder={'Логин'} onChangeText={login => setLogin(login)} />
                <CustomTextInput value={password} placeholder={'Пароль'} onChangeText={password => setPassword(password)} />
                <Button event={() => signIn()} >
                    <Text>Войти</Text>
                </Button>
                <AdditionalText>
                    <Text>Нажимая войти, вы подтверждаете ознакомление с</Text>
                    <Link text="пользовательским соглашением" event={() => alert('alert')} />
                </AdditionalText>
            </AuthorizationBlock>
        </Container>
    );
}

const Container = styled.View`
        flex: 1;
        padding:20px;
        justify-content:center;
        align-items:center;
        `;

const ImageBlock = styled.View`
        flex: 0.6;
        justify-content:center;
        align-items:center;
        `;
const AuthorizationBlock = styled.View`
    flex: 0.4;
    width:100%;
    justify-content:center;
    `;

const ImageLabel = styled.Text`
        font-weight:700;
        color:#000;
        font-size:24px;
        margin-top:10px;
        `;

const AdditionalText = styled.View`
align-items:center;
margin-top:20px;
`;


export default AutorizationScreen
