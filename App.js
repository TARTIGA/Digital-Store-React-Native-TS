import React, { useState, useMemo } from 'react'
import { AutorizationScreen, HomeScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context'


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
      signIn: (token) => {
        setIsLoading(false)
        setUserToken(token)
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;