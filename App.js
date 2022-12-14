import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
       <StackNavigator/>
    </NavigationContainer>
  );
  
}

