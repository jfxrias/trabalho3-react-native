import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabRoutes } from './TabRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/CustomDrawer'; // Se o componente já tiver export padrão

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ title: 'Meu App' }}
    >
      <Drawer.Screen name="Principal" component={TabRoutes} />
      <Drawer.Screen name="Sobre o App" component={Sobre} />
      <Drawer.Screen name="Contato Direto" component={Contato} />
    </Drawer.Navigator>
  );
}