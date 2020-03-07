import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, Alert, KeyboardAvoidingView } from 'react-native'
import { Link, CustomTextInput, Button } from '../components'
import { AuthContext } from '../context'
import WaterfallImage from '../assets/waterfall.svg'
import SvgUri from 'react-native-svg-uri';
import axios from 'axios'



const AutorizationScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext)
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const [isSending, setIsSending] = useState(false)

    const showAlert = (title = 'RESPONSE', data) => {
        Alert.alert(
            `${title}`,
            `${data}`,
            { cancelable: false },
        );
    }
    useEffect(() => {
        const fetchData = async () => {
            if (isSending) {
                try {
                    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
                    setUsers(result.data)
                    signIn()
                    showAlert('RESPONSE', JSON.stringify(result.data))
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
                <Button handler={() => setIsSending(!isSending)} disabled={isSending}>
                    <Text>Войти</Text>
                </Button>
                <AdditionalText >
                    <AdditionalTextLabel >Нажимая войти, вы подтверждаете ознакомление с
                        <Link text=" пользовательским соглашением" handler={() => showAlert('ERROR', error)} /></AdditionalTextLabel>
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


export default AutorizationScreen
