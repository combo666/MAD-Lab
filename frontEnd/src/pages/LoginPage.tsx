import react, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { AuthContext, IAuthContext } from "../providers/AuthProvider";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleSubmit = (auth: IAuthContext) => {

      // axios.get("http://192.168.0.5:3000/Health").then((res: any)=>{
      //   console.log(res)
      // })

      const postData = {
        email: email, 
        password: pass,
      };
      
      axios.post("http://192.168.0.5:3000/user/login", postData).then((res)=>{
        console.log(res.data)
        if (res.data === true) {
          auth.setIsLoggedIn(true);
        } else {
          auth.setIsLoggedIn(false);
        }
      })

      // if (email === 'Admin' && pass === 'Admin') {
      //   auth.setIsLoggedIn(true);
      // } else {
      //   auth.setIsLoggedIn(false);
      // }
    };
  


    const showSuccessMessage = () => {
        return(
            <>
                <Text>Success</Text>
            </>
        );
    }
  
    const showNotLoggedIn = (auth: IAuthContext) => {
      return (
        <>
          <Text style={{ alignSelf: 'center',}}>Login </Text>
          <TextInput
            style={{
              backgroundColor: '#FEFEFE',
              padding: 10,
              paddingLeft: 20,
              height: 50,
              borderRadius: 20,
              marginTop: 35,
              marginLeft: 15,
              marginRight: 15,
            }}
            placeholder="User Name"
            onChangeText={setEmail}
          />
          <TextInput
            style={{
              backgroundColor: '#FEFEFE',
              padding: 10,
              paddingLeft: 20,
              height: 50,
              borderRadius: 20,
              marginTop: 35,
              marginLeft: 15,
              marginRight: 15,
            }}
            placeholder="Password"
            onChangeText={setPass}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#D8E9A8',
              borderRadius: 20,
              marginTop: 30,
              marginRight: 5,
              alignSelf: 'center',
              height: 43,
              width: 100,
              padding: 10,
            }}
            onPress={() => handleSubmit(auth)}
          >
            <Text style={{ color: '#1B1B1B', marginLeft: 5, alignSelf: 'center', marginRight: 5 }}>Login </Text>
          </TouchableOpacity>
        </>
      );
    };
  
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            {!isLoggedIn ? showNotLoggedIn(auth as IAuthContext)  : showSuccessMessage()}
          </View>
        )}
      </AuthContext.Consumer>
    );
  };
  

export default LoginPage;