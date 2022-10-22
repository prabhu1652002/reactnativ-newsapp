import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';


export default function App() {
  return (
    <View >
        <Header/>
        <Card/>
        <Text>Hello world!</Text>
        {/* <Text>Hello world!</Text> */}
        {/* <Text>Hello world!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
