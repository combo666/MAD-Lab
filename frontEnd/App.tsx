import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import CounterPage from "./src/pages/counterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";

const stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Counter" component={CounterPage}/>
        <stack.Screen name="LoginPage" component={LoginPage}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};


export default App;