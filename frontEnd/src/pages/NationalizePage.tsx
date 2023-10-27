import axios from "axios";
import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native"; 


const NationalizePage = () =>{
    const [nationality , setNationality] = useState('');
    const [userName, setUserName] = useState('');
    const handeleSubmit = () =>{
        axios.get(`https://api.nationalize.io?name=${userName}`).then((res)=>{
            
            if(res.data.country.length){
                console.log(res.data.country[0]);
                setNationality(res.data.country[0]["country_id"]);
            }
            
        })
    }


    return(
        <View style={style.mainContainer}>
            <Text style={style.mainText}>
                {nationality}
            </Text>
            <View>
                <TextInput style={style.inputStyle}value={userName} onChangeText={setUserName}/>
            </View>
            <Button title="Submit" onPress={handeleSubmit}></Button>
        </View>
    );
}



const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    mainText:{
        fontSize: 80,
        fontWeight: '700',
        color: "red"

    },

    inputStyle: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        width: 200,
        borderRadius: 5

    }
})

export default NationalizePage;