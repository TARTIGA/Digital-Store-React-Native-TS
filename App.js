import React, { useState, useMemo } from 'react'
import { HomeScreen } from './screens'
import {
  FirstScreen,
  LargeScreen,
  ExclusivityScreen,
  PriceScreen,
  AutorizationScreen
} from './screens/authorization'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './context'


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const RootStack = createStackNavigator();

const AppStackScreen = () =>
  <AppStack.Navigator >
    <AppStack.Screen name="Home" component={HomeScreen} />
  </AppStack.Navigator>

const AuthStackScreen = () =>
  <AuthStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: { backgroundColor: '#0001FC', height: 120, shadowColor: 'transparent' },
    headerTitleStyle: { color: '#fff', fontSize: 24 },
    headerTintColor: '#fff',
    cardStyle: {
      backgroundColor: '#0001FC',
      padding: 32,
      flex: 1
    }
  }}
    initialRouteName={"AutorizationScreen"}
  >
    <AuthStack.Screen name="FirstScreen" component={FirstScreen} />
    <AuthStack.Screen name="LargeScreen" component={LargeScreen} />
    <AuthStack.Screen name="ExclusivityScreen" component={ExclusivityScreen} />
    <AuthStack.Screen name="PriceScreen" component={PriceScreen} />
    <AuthStack.Screen name="AutorizationScreen" component={AutorizationScreen} options={{
      headerShown: true
    }} />
    <AuthStack.Screen name="AutorizationScreen2" component={AutorizationScreen} options={{
      headerShown: true
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