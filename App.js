import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';


const Stack = createNativeStackNavigator()

function AuthStack() {
  return(
    <Welcome />
  )
}


export default function App() {
  return (
      <>
        <StatusBar style='light' />
        <AuthStack />
      </>
      
  );
}


