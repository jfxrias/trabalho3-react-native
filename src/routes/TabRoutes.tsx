import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackRoutes } from './StackRoutes';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Início" component={StackRoutes} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Contato" component={Contato} />
    </Tab.Navigator>
  );
}