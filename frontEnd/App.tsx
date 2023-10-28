import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CounterPage from "./src/pages/counterPage";
import LoginPage from "./src/pages/LoginPage";
import SettingsPage from "./src/pages/SettingsPage"
import NationalizePage from "./src/pages/NationalizePage"
import ChatsPage from "./src/pages/ChatsPage";

const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen =() =>{
  return(
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="Counter" component={CounterPage}/>
      <stack.Screen name="LoginPage" component={LoginPage}/>
    </stack.Navigator>
  );

}
const App = () =>{
  return(
    <NavigationContainer>
      <bottom_tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#1B1B1B",
            alignItems: 'center',
            borderTopWidth: 0, 
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E0FFB4',
          tabBarInactiveTintColor: "grey",
          title: "Soil Society",
          headerPressOpacity: 5,
          headerShown: false
        }}
      >
        <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen}
          options={{
            tabBarLabel:"Dashboard",
            tabBarIcon: ({focused})=> <MaterialCommunityIcons name={focused ? "post": "post-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
        />
        <bottom_tab.Screen name="Settings" component={SettingsPage}/>
        <bottom_tab.Screen name="NationalizePage" component={NationalizePage}/>
        
        <bottom_tab.Screen name="Chats" component={ChatsPage}
          options={{
            tabBarLabel:"Dashboard",
            tabBarIcon: ({focused})=> <MaterialCommunityIcons name={focused ? "chat": "chat-outline"} size={focused? 30: 20} color={focused ?"#DDFF54" : 'white'}/>,
            tabBarLabelStyle:{fontSize: 14, fontWeight: 'bold'},
            tabBarActiveTintColor: "#E0FFB4"
          }}
        />
      </bottom_tab.Navigator>
    </NavigationContainer>
  );
};


export default App;