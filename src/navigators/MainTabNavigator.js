import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '../common/AppIcons';
import ColorInfo from '../common/ColorInfo';
import ScreenPath from '../common/ScreenPath';
import ChatStackNavigator from './ChatStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import LearningStackNavigator from './LearningStackNavigator';
import VisionStackNavigator from './VisionStackNavigator';
const MainBottomTab = createBottomTabNavigator();

const MainTabNavigator = (props) => {
  return (
    <MainBottomTab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
          tabBarStyle: {
            height:
              Platform.OS === 'ios'
                ? 90
                : 70,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarActiveTintColor: ColorInfo.tabActiveColor,
          tabBarInactiveTintColor: ColorInfo.tabInactiveColor,
          tabBarHideOnKeyboard: Platform.OS === 'ios' ? false : true,
        };
      }}
      initialRouteName={ScreenPath.Main.Home}>
      <MainBottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: 'Home'
        }}
        name={ScreenPath.Main.Home}
        component={HomeStackNavigator}
      />
      <MainBottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
          title: 'Chat'
        }}
        name={ScreenPath.Main.Chat}
        component={ChatStackNavigator}
      />
      <MainBottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-edit" size={size} color={color} />
          ),
          title: 'My Vision'
        }}
        name={ScreenPath.Main.Vision}
        component={VisionStackNavigator}
      />
      <MainBottomTab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-variant" size={size} color={color} />
          ),
          title: 'Learning'
        }}
        name={ScreenPath.Main.Learning}
        component={LearningStackNavigator}
      />
    </MainBottomTab.Navigator>
  );
};


export default MainTabNavigator;
