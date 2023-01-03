import React from 'react';
import { StyleSheet, Text, View ,Platform, Image,ScrollView , TouchableOpacity} from 'react-native';
// import Header from '../components/Header';
import Card from '../components/Card';


const NewsListScreen = props => {
    return (
        <ScrollView >
        <View style={styles.background}>
    
            <Card 
            texttitle={"Hello news 1"} 
            textcontent={"Content 1"} 
            src={require("../../assets/favicon.png")}
            navigation={props.navigation}
            />
            <Card 
              texttitle={"Hello news 2"} 
              textcontent={"Content 2"} 
              src={require('../../assets/icon.png')}
              navigation={props.navigation}
              />
            <Card 
              texttitle={"Hello news 3"} 
              textcontent={"Content 3"} 
              src={require('../../assets/splash.png')}
              navigation={props.navigation}
              />
            <Card 
              texttitle={"Hello news 4"} 
              textcontent={"Content 4"} 
              src={require('../../assets/favicon.png')}
              navigation={props.navigation}
              />
            <Card 
              texttitle={"Hello news 5"} 
              textcontent={"Content 5"} 
              src={require('../../assets/favicon.png')}
              navigation={props.navigation}
              />
            <Card 
              texttitle={"Hello news 6"} 
              textcontent={"Content 6"} 
              src={require('../../assets/favicon.png')}
              navigation={props.navigation}
              />
            <Card 
              texttitle={"Hello news 7"} 
              textcontent={"Content 7"} 
              src={require('../../assets/icon.png')}/>
            <Card 
              texttitle={"Hello news 8"} 
              textcontent={"Content 8"} 
              src={require('../../assets/splash.png')}/>
            <Card 
              texttitle={"Hello news 9"} 
              textcontent={"Content 9"} 
              src={require('../../assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 10"} 
              textcontent={"Content 10"} 
              src={require('../../assets/favicon.png')}/>
        </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    background:{
        backgroundColor:"black"
    }
})

export default NewsListScreen