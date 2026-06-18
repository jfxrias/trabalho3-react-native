import 'react-native-gesture-handler'; // Obrigatório no topo para o Drawer funcionar
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './src/routes/DrawerRoutes';
export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}