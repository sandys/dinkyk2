import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DailyReviewScreen from '../screens/DailyReviewScreen';
import LessonLauncherScreen from '../screens/LessonLauncherScreen';
import SoundWallScreen from '../screens/SoundWallScreen';

export type RootStackParamList = {
  LessonLauncher: undefined;
  DailyReview: undefined;
  SoundWall: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f5ff'
  }
};

const AppNavigator: React.FC = () => (
  <NavigationContainer theme={navTheme}>
    <Stack.Navigator initialRouteName="LessonLauncher">
      <Stack.Screen
        name="LessonLauncher"
        component={LessonLauncherScreen}
        options={{ title: 'Lessons' }}
      />
      <Stack.Screen
        name="DailyReview"
        component={DailyReviewScreen}
        options={{ title: 'Daily Review' }}
      />
      <Stack.Screen
        name="SoundWall"
        component={SoundWallScreen}
        options={{ title: 'Sound Wall' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
