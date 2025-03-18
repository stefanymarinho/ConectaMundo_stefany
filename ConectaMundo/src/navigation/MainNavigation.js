import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import { createStackNavigator } from "@react-navigation/stack";
 import HomeScreen from "../screens/HomeScreen";
 import RegisterScreen from '../screens/RegisterScreen';
 import LoginScreen from '../screens/LoginScreen';
 import ProfileScreen from '../screens/ProfileScreen';
 import PostScreen from '../screens/PostScreen';
 import CreatePostScreen from '../screens/CreatePostScreen';
 import ViewPostsScreen from '../screens/ViewPostsScreen';

 const Stack = createStackNavigator();
 
 const MainNavigator = ()=>{
    return(
     <NavigationContainer>
    
        </NavigationContainer>
    )
 }

