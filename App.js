import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScanAndResultComponent from './components/Scanner';

export default function App() {
  const Stack =createNativeStackNavigator()
  return (
<NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Scanner' component={ScanAndResultComponent} />
    </Stack.Navigator> 
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
