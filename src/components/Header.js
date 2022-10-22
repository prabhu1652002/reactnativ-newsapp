import React from 'react';
import { StyleSheet, Text, View, Viewv ,Platform } from 'react-native';

const Header  = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}> News App</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header : {
        backgroundColor: Platform.OS=== 'android'? 'royalblue':'black',
        padding :15,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})

export default Header;