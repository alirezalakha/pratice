/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from './src/screens/splash-screen';
import {Home} from './src/screens/home-screen';

const Stack = createNativeStackNavigator();

export const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);

  // // useEffect(() => {
  // //   setTimeout(() => {
  // //     setSplashScreen(false);
  // //   }, 4000);
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {splashScreen ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : null}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
