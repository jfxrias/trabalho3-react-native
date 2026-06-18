import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contato" component={Contato} />
      <Stack.Screen name="Sobre" component={Sobre} />
     
    </Stack.Navigator>
  );
}
