import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import ContentTab from './ContentTab';
import SettingsScreen from '../screens/SettingsScreen';
import RoomScreen from '../screens/RoomScreen';
import MoodLightScreen from '../screens/MoodLightScreen';
import GamePlayScreen from '../screens/GamePlayScreen';
import ElectroInfoScreen from '../screens/ElectroInfoScreen';
import GameManageScreen from '../screens/GameManageScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: 'black',
        headerTitleStyle: { fontWeight: '700' },
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Room'} component={RoomScreen} />
      <Stack.Screen name={'ContentTab'} component={ContentTab} />
      <Stack.Screen
        name={'Mood'}
        component={MoodLightScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'ElectroInfo'}
        component={ElectroInfoScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{
          title: 'settings',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'GamePlay'}
        component={GamePlayScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'GameManage'}
        component={GameManageScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
