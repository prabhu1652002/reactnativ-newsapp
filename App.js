import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';


// news api-key:  a6673d4869ce4e929adbb67d5058086e


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
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"white"
  }
});
