import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from "../screens/Home";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: COLORS.secondary,
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({color}) => (
                <EvilIcons name="credit-card" size={32} color={color} />
            ),
            headerShown: false,
        }}
       />
      <Tab.Screen 
        name="For you" 
        component={Home} 
        options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="home"  size={32} color={color} />
            ),
            headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Support" 
        component={Home} 
        options={{
            tabBarIcon: ({color}) => (
                <EvilIcons name="question" size={40} color={color} />
            ),
            headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Home} 
        options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="person"  size={32} color={color} />
            ),
            headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;