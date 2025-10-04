import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DailyReviewScreen from '../screens/DailyReviewScreen';
import LessonLauncherScreen from '../screens/LessonLauncherScreen';
import SoundWallScreen from '../screens/SoundWallScreen';
import Lesson01HomeScreen from '../screens/lesson01/Lesson01HomeScreen';
import Lesson01RhymeMatchScreen from '../screens/lesson01/Lesson01RhymeMatchScreen';
import Lesson01WordTapperScreen from '../screens/lesson01/Lesson01WordTapperScreen';

export type RootStackParamList = {
  LessonLauncher: undefined;
  DailyReview: undefined;
  SoundWall: undefined;
  Lesson01Home: undefined;
  Lesson01RhymeMatch: undefined;
  Lesson01WordTapper: undefined;
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
      <Stack.Screen
        name="Lesson01Home"
        component={Lesson01HomeScreen}
        options={{ title: 'Lesson 01' }}
      />
      <Stack.Screen
        name="Lesson01RhymeMatch"
        component={Lesson01RhymeMatchScreen}
        options={{ title: 'Rhyme Match' }}
      />
      <Stack.Screen
        name="Lesson01WordTapper"
        component={Lesson01WordTapperScreen}
        options={{ title: 'Word Tapper' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
