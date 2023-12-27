// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/telas/Home';
import LoginScreen from './src/telas/Login';
import DetalhesCartaoScreen from './src/telas/DestalhesCartao';
import PixScreen from './src/telas/PixScreen';


const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Main"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="DetalhesCartao" component={DetalhesCartaoScreen} options={{ headerShown: false }}  />

          </>
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            children={()=><LoginScreen onLogin={handleLogin} />}
          />
          )}
          <Stack.Screen name="Pix" component={PixScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
