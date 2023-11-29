import React from "react";
import { View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from "react-native";
import { AuthContext, IAuthContext } from "../providers/AuthProvider";

const ProfilePage =() =>{

    const handleLogout = (auth : IAuthContext) =>{
        auth.setIsLoggedIn(false);
    }
      return (
        <AuthContext.Consumer>
            {(auth)=>
                <>
                <Text style={{ color: '#1B1B1B', marginLeft: 5, alignSelf: 'center', marginRight: 5 }}>
                    {auth?.userName}
                </Text>
                <TouchableOpacity
                style={{
                    backgroundColor: '#D8E9A8',
                    borderRadius: 20,
                    marginTop: 30,
                    marginRight: 5,
                    alignSelf: 'center',
                    height: 40,
                    width: 100,
                    padding: 10,
                }}
                onPress={()=>{handleLogout(auth as IAuthContext)}}
                >
                <Text style={{ color: '#1B1B1B', marginLeft: 5, alignSelf: 'center', marginRight: 5 }}>Hato</Text>
                </TouchableOpacity>
                </>
            }


        </AuthContext.Consumer>
        
      );
};

export default ProfilePage;  