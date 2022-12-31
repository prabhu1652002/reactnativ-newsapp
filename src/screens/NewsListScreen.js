import React from 'react';
import { StyleSheet, Text, View ,Platform, Image } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';


const NewsListScreen = () => {
    return (
        <ScrollView >
        <View style={styles.background}>
            <Header/>
            <Card 
              texttitle={"Hello news 1"} 
              textcontent={"Content 1"} 
              src={require('../NewsApp/assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 2"} 
              textcontent={"Content 2"} 
              src={require('../NewsApp/assets/icon.png')}/>
            <Card 
              texttitle={"Hello news 3"} 
              textcontent={"Content 3"} 
              src={require('../NewsApp/assets/splash.png')}/>
            <Card 
              texttitle={"Hello news 4"} 
              textcontent={"Content 4"} 
              src={require('../NewsApp/assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 5"} 
              textcontent={"Content 5"} 
              src={require('../NewsApp/assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 6"} 
              textcontent={"Content 6"} 
              src={require('../NewsApp/assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 7"} 
              textcontent={"Content 7"} 
              src={require('../NewsApp/assets/icon.png')}/>
            <Card 
              texttitle={"Hello news 8"} 
              textcontent={"Content 8"} 
              src={require('../NewsApp/assets/splash.png')}/>
            <Card 
              texttitle={"Hello news 9"} 
              textcontent={"Content 9"} 
              src={require('../NewsApp/assets/favicon.png')}/>
            <Card 
              texttitle={"Hello news 10"} 
              textcontent={"Content 10"} 
              src={require('../NewsApp/assets/favicon.png')}/>
        </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    
})

export default NewsListScreen