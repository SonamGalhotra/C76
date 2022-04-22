import React, { Component } from 'react';
import { Text, View ,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style= {styles.droidSafeArea}/>

                <View style= {styles.titleBar}>
                   <Text style={StyleSheet.tittleText}>ISS Tracker App</Text>
                </View>
             
              <TouchableOpacity style = {styles.routeCard}>
                  <Text style = {styles.routeText}> ISS Location </Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.routeCard}>
                  <Text style = {styles.routeText}> Meteors </Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight :0
    },

    titleBar:{
        flex: 0.5,
        justifyContent: "center",
        alignItems:"center"
    },

    routeCard:{
        fles: 0.25,
        marginTop: 50,
        marginLeft: 50,
        marginRight : 50,
        borderRadius:30,
        backgroundColor:" white"
    },
    
    routeText: {
        fonstSize: 30,
        color: "black",
        marginTop: 65
    }
});