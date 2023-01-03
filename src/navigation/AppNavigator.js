import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsListScreen from '../screens/NewsListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function HomeNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Screen name="NewsList" component={NewsListScreen} options={{title:'All News'}} />
                <Stack.Screen name="NewsDetails" component={NewsDetailsScreen}/>
        </Stack.Navigator>
    )
}
function TabsNavigator(){
    return (
        <Tabs.Navigator 
        screenOptions={ 
            ({route})=>({
            
            tabBarIcon: () => {
                let iconName;
                if(route.name=='Home'){
                    iconName="home"
                }else if(route.name=='Favorites'){
                    iconName="favorite"
                }
                return(
                    <MaterialIcons name={iconName} size={24}></MaterialIcons>
                )
            }
        })}
        >
            <Tabs.Screen name = "Home" component={HomeNavigator} options={{headerShown: false}} />
            <Tabs.Screen name = "Favorites" component={FavoriteScreen} />
        </Tabs.Navigator>
    )
}

function AppNavigator(){
    return (
        <NavigationContainer>
        
        </NavigationContainer>
    )
}

export default AppNavigator;

