import React from "react";
import { View,Text,StyleSheet } from "react-native";

const app = () =>{
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    fontWeight: "700",
    fontSize: 16,
    color: "red"
  }

})
export default app;