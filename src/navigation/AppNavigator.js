import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsListScreen from '../screens/NewsListScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const HeaderRight = () => {                 // for info button on right side of header of any screen
    const navigation = useNavigation();
    return(
        <MaterialIcons name = "info" size={24} onPress={() => (
            navigation.navigate('AboutScreen')
        )}></MaterialIcons>
    )
}
function HomeNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerRight: () => <HeaderRight/>}}>
                <Stack.Screen name="NewsList" component={NewsListScreen} options={{title:'All News'}} />
                <Stack.Screen name="NewsDetails" component={NewsDetailsScreen}/>
                <Stack.Screen name="AboutScreen" component={AboutScreen}/>
        </Stack.Navigator>
    )
}
function FavoriteNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerRight: () => <HeaderRight/>}}>
                <Stack.Screen name="Favorite" component={FavoriteScreen} />
        </Stack.Navigator>
    )
}
// function TabsNavigator(){
//     return (
//         <Tabs.Navigator 
//         screenOptions={ 
//             ({route})=>({
            
//             tabBarIcon: () => {
//                 let iconName;
//                 if(route.name=='Home'){
//                     iconName="home"
//                 }else if(route.name=='Favorites'){
//                     iconName="favorite"
//                 }
//                 return(
//                     <MaterialIcons name={iconName} size={24}></MaterialIcons>
//                 )
//             }
//         })}
//         >
//             <Tabs.Screen name = "Home" component={HomeNavigator} options={{headerShown: false}}/>
//             <Tabs.Screen name = "Favorites" component={FavoriteNavigator} />
//         </Tabs.Navigator>
//     )
// }
// main navigtion system, tab-> stack
function AppNavigator(){
    return (
        <NavigationContainer>
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
            {/* <Drawer.Navigator>
                <Drawer.Screen name="News" component={TabsNavigator}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
            </Drawer.Navigator> */}                 
        </NavigationContainer>
    )
    // drawer not working some module error
}

export default AppNavigator;

