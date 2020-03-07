import React, { useState, useEffect, useMemo } from 'react'
import { Text } from 'react-native';
import { AutorizationScreen, HomeScreen, SplashScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context'
import styled from 'styled-components/native'


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const RootStack = createStackNavigator();

//don`t use expressions
const AppStackScreen = () =>
  <AppStack.Navigator >
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>

const AuthStackScreen = () =>
  <AuthStack.Navigator >
    <AuthStack.Screen name="Authorization" component={AutorizationScreen} options={{
      headerShown: false
    }} />
  </AuthStack.Navigator>

const RootStackScreen = ({ userToken }) =>
  <RootStack.Navigator headerMode="none">
    {userToken ?
      <RootStack.Screen name="App" component={AppStackScreen} /> :
      <RootStack.Screen name="Auth" component={AuthStackScreen} />}
  </RootStack.Navigator>


const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)
  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false)
        setUserToken('value')
      },
      signUp: () => {
        setIsLoading(false)
        setUserToken('value')
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const Container = styled.View`
flex:1;
align-items:center;
justify-content:center;
background:blue;
`;

export default App;