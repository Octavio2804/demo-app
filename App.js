import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './screens/Inicio';
import ComoJugar from './screens/ComoJugar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native-web';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Inicio'
          component={Inicio}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name='Instrucciones'
          component={ComoJugar}
          options={{
            title: "Como jugar",
            headerStyle: {
              backgroundColor: '#CD533B',
            },
            headerLargeTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
