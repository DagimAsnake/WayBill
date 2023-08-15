import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Auth/Welcome';
import SignUp from './screens/Auth/SignUp';
import SignIn from './screens/Auth/SignIn';

const Stack = createNativeStackNavigator()

function AuthStack() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style='light' />
        <AuthStack />
      </NavigationContainer>
  );
}


