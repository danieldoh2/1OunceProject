import React from 'react';
import {View, ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style = {styles.background_img} source={require('../assets/background_img.webp')}>
            <View style = {styles.loginButton}>

            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background_img: {
        flex:1,
        justifyContent: "flex-end"
    },
    loginButton: {
       width : "100%",
       height: 70,
       backgroundColor: "white"
    }

})
    

export default WelcomeScreen;