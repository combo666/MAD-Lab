import React ,{useState}from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LoginPage from "./LoginPage";

const CounterPage = (props: any) =>{

    const [counter, setCounter] = useState(0); //REACT HOOK!! (Functional Component)

    const increaseHandler = () =>{
        setCounter(counter + 1);
        console.log("Current Value :", counter);
    }

    const decreaseHandler = () =>{
        setCounter(counter - 1);
        console.log("Current Value :", counter);
    }

    const resetHandler = () =>{
        setCounter(0);
        console.log("Current Value :", 0);
    }

    const navHandeler = () =>{
        props.navigation.navigate("Login");
    }

    return(
        <View style={style.mainContainer}>
            <Text>Tazbih </Text>
            <Text style={style.counterContainer}>{counter}</Text>
            <View style={style.buttonContainer}>

                <Button title="Decrease(-)" onPress={decreaseHandler}></Button>
                <Button title="Reset" onPress={resetHandler}></Button>
                <Button title="Increase(+)" onPress={increaseHandler}></Button>
                    
            </View>
            <View>
                <Button title="Login" onPress={navHandeler}></Button>
            </View>
            
        </View>
    );
};


const style =  StyleSheet.create({
    mainContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterContainer:{
        fontSize: 80,
        fontWeight: "700",
        color: "red"
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLeft:{
        height: 30,
        width: 60,
        marginRight: 10
    },
    buttonRightt:{
        height: 30,
        width: 60
    }
})

export default CounterPage;