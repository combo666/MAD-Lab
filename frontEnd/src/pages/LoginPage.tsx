import react, { useState } from "react";
import { View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from "react-native";

const LoginPage = () =>{


    const [email, setEmail] = useState('');
    const [pass, setPass]= useState('');
    const [isLogedIn, setIsLogedIn] = useState(true);

    const handleSubmit = () =>{
        if(email === "Danish" && pass === "CDI"){
            setIsLogedIn(false);
        }
    }
    const showLoggedInPage =()=>{
        return(<>
            <Text style={{
                    color: '#1B1B1B',
                    marginLeft:5,
                    alignSelf: "center",
                    marginRight:5,
                }}>
                oooooooooooooh Yyyyyahhh!!!
            </Text>
            <TouchableOpacity
                            
                            style={{
                                backgroundColor: '#D8E9A8', 
                                borderRadius: 20,
                                marginTop: 30,
                                marginRight: 5,

                                alignSelf: "center",
                                height: 40,
                                width:100,
                                padding: 10,
                            }}
                            onPress={()=> setIsLogedIn(true)}
                        >
                            <Text style={{
                                color: '#1B1B1B',
                                marginLeft:5,
                                alignSelf: "center",
                                marginRight:5,
                            }}>Hato</Text>
            </TouchableOpacity>

        </>);
    }

    const showNotLoggedIn = ()=>{

        return(
            <>
            <Text style={{marginLeft:150}}>Login</Text>
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
                    fontFamily:"Arimo  Subset",
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
                    fontFamily:"Arimo Hebrew Subset",
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

                                alignSelf: "center",
                                height: 40,
                                width:100,
                                padding: 10,
                            }}
                            onPress={handleSubmit}
                        >
                            <Text style={{
                                color: '#1B1B1B',
                                marginLeft:5,
                                alignSelf: "center",
                                marginRight:5,
                            }}>Login</Text>
            </TouchableOpacity>
        </>

        );
        
    }

    return(
        <View style = {{flex: 1, justifyContent: "center"}}>
            {isLogedIn?
                showNotLoggedIn()
                :
                showLoggedInPage()
            }
        </View>
        
    );
}

export default LoginPage;