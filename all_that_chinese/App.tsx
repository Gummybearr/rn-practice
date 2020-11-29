/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const splashScreen = (props: any) => {
  setTimeout(() => {
    props.navigation.replace('Home');
  }, props.route.params.duration*1000)
  return (<SplashScreen/>)
}

const Tab = createBottomTabNavigator();

const HomeScreenWithNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Dashboard" 
        component={HomeScreen}
        options={{
          title: "대시보드",
          tabBarIcon: () => {
            return <Ionicons name='ios-home' size={20} />
          }
        }}
      />
      <Tab.Screen 
        name="learn" 
        component={HomeScreen}
        options={{
          title: "학습하기",
          tabBarIcon: () => {
            return <Ionicons name='ios-brush' size={20}/>
          }
        }}
      />
      <Tab.Screen 
        name="Community" 
        component={HomeScreen}
        options={{
          title: "커뮤티니",
          tabBarIcon: () => {
            return <Ionicons name='ios-chatbubbles' size={20}/>
          }
        }}
      />
      <Tab.Screen 
        name="myPage" 
        component={HomeScreen}
        options={{
          title: "마이페이지",
          tabBarIcon: () => {
            return <Ionicons name='ios-person' size={20}/>
          }
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={splashScreen}
            options={{headerShown: false}}
            initialParams={{duration: 1}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreenWithNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
};

export default App;