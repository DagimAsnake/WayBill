import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from '@expo/vector-icons';

import Welcome from './screens/Auth/Welcome';
import SignUp from './screens/Auth/SignUp';
import SignIn from './screens/Auth/SignIn';

import HomeCon from './screens/Control/HomeCon';
import RewardCon from './screens/Control/RewardCon';
import HistoryCon from './screens/Control/HistoryCon';
import SettingCon from './screens/Control/SettingCon';
import HeaderIcon from './components/UI/HeaderIcon';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function AuthStack() {
  return(
    <>
    <StatusBar style='light' />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
    </>
  )
}

function BottomNav() {
  return(
    <>
    <StatusBar style='dark' />
    <BottomTab.Navigator 
       screenOptions={({navigation}) => ({
        tabBarActiveTintColor: "red",
        headerRight: ({tintColor}) => (
          <>
              <HeaderIcon />
          </>
          )
      })}
    >
      <BottomTab.Screen name='Controller' component={HomeCon}  
        options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" size={size} color={color} />
              )
            }}
      />
      <BottomTab.Screen name='Reward' component={RewardCon}
         options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ribbon-outline" size={size} color={color} />
            )
          }}
      />
      <BottomTab.Screen name='History' component={HistoryCon} 
         options={{
            tabBarIcon: ({color, size}) => (
              <Entypo name="back-in-time" size={size} color={color} />
            )
          }}
      />
      <BottomTab.Screen name='Setting' component={SettingCon} 
         options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            )
          }}
      />
    </BottomTab.Navigator>
    </>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthStack />   */}
      {/* After Authentication */}
      <Stack.Navigator>
          <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}


