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
import {AuthProvider, AuthContext} from "./src/providers/AuthProvider";

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

    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>
          auth?.isLoggedIn ? (
            <NavigationContainer>
              <bottom_tab.Navigator>
                
              </bottom_tab.Navigator>

            </NavigationContainer>
          )
        }


      </AuthContext.Consumer>
    </AuthProvider>
    
  );
};


export default App;