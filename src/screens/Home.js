    import React from "react";
    import {Text, View, StyleSheet} from "react-native";

    const HomeScreen= ()=>{
        return(
            <>
            <View style={styles.viewStyle}>
                <Text>Series Inc.</Text>
            </View>
            </>
        )
    }

    const styles = StyleSheet.create({
        viewStyle:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#c8c8c8"
        }

    })
        

    export default HomeScreen;