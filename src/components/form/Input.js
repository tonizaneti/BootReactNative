import React,{useState} from "react";
import {StyleSheet, TextInput, Text} from "react-native"

const Input = (props) =>{
    var [stateValor, setStateValor] = useState();

    const onChange = (text)=>
    {
        if(!props.onChange) return;
            props.onChange(text);
    }
    
    return(
        <>
        <Text>{props.label}</Text>
        <TextInput value={stateValor} style={styles.TextInputStyle}
        onChangeText={onChange } />
        </>
    )
}

export default Input;

const styles = StyleSheet.create(
    {
        TextInputStyle:{
            backgroundColor:"#d1cdcd"
        }
    }
)
