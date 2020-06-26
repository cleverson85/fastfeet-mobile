import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from '~/pages/Login';
import Detail from '~/pages/Detail';
import Main from '~/pages/Main';
import User from '~/pages/User';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
          height: 70,
        },
        labelStyle: {
          fontFamily: 'Roboto-Regular',
          fontSize: 14,
          marginTop: 5,
        },
        tabStyle: {
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Entregas"
        component={Main}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Meu Perfil"
        component={User}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={40} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
