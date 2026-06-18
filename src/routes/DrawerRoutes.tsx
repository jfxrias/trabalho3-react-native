import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ title: 'Meu App' }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre o App" component={Sobre} />
      <Drawer.Screen name="Contato Direto" component={Contato} />


    </Drawer.Navigator>
  );
}
