import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { Link, CustomTextInput, Button } from '../components'
import { AuthContext } from '../context'
import WaterfallImage from '../assets/waterfall.svg'
import SvgUri from 'react-native-svg-uri';
import axios from 'axios'
import API from '../API'
import showAlert from '../helpers/showAlert'



const AuthorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (isSending) {
                try {
                    const result = await axios.get(API.url);
                    const { data: { token } } = result
                    signIn(token)
                    showAlert('RESPONSE', JSON.stringify(token))
                } catch (error) {
                    showAlert('ERROR', error)
                } finally {
                    setIsSending(false)
                }
            }
        };
        fetchData();
    }, [isSending]);

    return (
        <Container behavior="position" contentContainerStyle={{
            flex: 1,
            width: '100%'
        }} >
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
                <Button handler={() => setIsSending(!isSending)}
                    disabled={isSending}
                    label={<Text>Войти</Text>} />
                <AdditionalText >
                    <AdditionalTextLabel >Нажимая войти, вы подтверждаете ознакомление с
                        <Link text=" пользовательским соглашением" handler={() => showAlert('Пользовательское соглашение', '111222333')} /></AdditionalTextLabel>
                </AdditionalText>
            </AuthorizationBlock>
        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
        flex: 1;
        padding:20px;
        justify-content:center;
        align-items:center;
        background-color:#0001FC;
        color:#fff;
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
flex:1;
margin-top:20px;
`;

const AdditionalTextLabel = styled.Text`
text-align:center;
font-size: 12;
`;


export default AuthorizationScreen
