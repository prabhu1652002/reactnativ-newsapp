import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Card from './src/components/Card';
import Header from './src/components/Header';

const loadFonts=()=>{
  return Font.loadAsync({
      'Oswald': require('E:/Appdev/NewsApp/assets/fonts/Oswald-Regular.ttf'),
      'OswaldBold': require('E:/Appdev/NewsApp/assets/fonts/Oswald-Bold.ttf')
    });
}

export default function App() {
  const [fontLoaded, setfontLoaded] = useState('false');
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync = {loadFonts}
        onFinish ={()=> setfontLoaded('true')}
      />
    );
  }

  return (
    <View >
        <Header/>
        <Card/>
        <Text>Hello world!</Text>
        <Text>Hello world!</Text>
        {/* <Text>Hello world!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
