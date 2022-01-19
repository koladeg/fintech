import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from "../screens/Home";
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            acticeTintcolor: '£f15454',
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({}) => (
                <EvilIcons name="credit-card" size={32} color={"grey"} />
            ),
        }}
       />
      <Tab.Screen 
        name="For you" 
        component={Home} 
        options={{
            tabBarIcon: ({}) => (
                <Ionicons name="home"  size={32} color={"grey"} />
            ),
        }}
      />
      <Tab.Screen 
        name="Support" 
        component={Home} 
        options={{
            tabBarIcon: ({}) => (
                <EvilIcons name="question" size={32} color={"grey"} />
            ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Home} 
        options={{
            tabBarIcon: ({}) => (
                <Ionicons name="person"  size={32} color={"grey"} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;