import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsListScreen from '../screens/NewsListScreen';
const Stack = createNativeStackNavigator();

function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name="NewsList" component={NewsListScreen} options={{title:'All News'}} />
                <Stack.Screen name="NewsDetails" component={NewsDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

