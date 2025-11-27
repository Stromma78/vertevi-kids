import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import KidsModeScreen from './screens/KidsModeScreen';
import ParentAreaScreen from './screens/ParentAreaScreen';
import ParentPinScreen from './screens/ParentPinScreen';

import DistanceCoachScreen from './screens/DistanceCoachScreen';
import PostureCheckScreen from './screens/PostureCheckScreen';
import MovementBreaksScreen from './screens/MovementBreaksScreen';
import CalmFocusScreen from './screens/CalmFocusScreen';

import ScreenTimeRulesScreen from './screens/ScreenTimeRulesScreen';
import PostureSettingsScreen from './screens/PostureSettingsScreen';
import DeviceProfilesScreen from './screens/DeviceProfilesScreen';
import ReportsScreen from './screens/ReportsScreen';

import { colors } from './theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.onPrimary,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="KidsMode"
          component={KidsModeScreen}
          options={{ title: 'Kids Mode' }}
        />
        <Stack.Screen
          name="DistanceCoach"
          component={DistanceCoachScreen}
          options={{ title: 'Screen Distance Coach' }}
        />
        <Stack.Screen
          name="PostureCheck"
          component={PostureCheckScreen}
          options={{ title: 'Posture Check' }}
        />
        <Stack.Screen
          name="MovementBreaks"
          component={MovementBreaksScreen}
          options={{ title: 'Movement Breaks' }}
        />
        <Stack.Screen
          name="CalmFocus"
          component={CalmFocusScreen}
          options={{ title: 'Calm Focus Mode' }}
        />
        <Stack.Screen
          name="ParentPin"
          component={ParentPinScreen}
          options={{ title: 'Parent Access' }}
        />
        <Stack.Screen
          name="ParentArea"
          component={ParentAreaScreen}
          options={{ title: 'Parent Area' }}
        />
        <Stack.Screen
          name="ScreenTimeRules"
          component={ScreenTimeRulesScreen}
          options={{ title: 'Screen Time Rules' }}
        />
        <Stack.Screen
          name="PostureSettings"
          component={PostureSettingsScreen}
          options={{ title: 'Posture Settings' }}
        />
        <Stack.Screen
          name="DeviceProfiles"
          component={DeviceProfilesScreen}
          options={{ title: 'Device Profiles' }}
        />
        <Stack.Screen
          name="Reports"
          component={ReportsScreen}
          options={{ title: 'Reports & History' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
