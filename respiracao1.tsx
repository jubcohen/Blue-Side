import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { useFonts } from 'expo-font'; 
import AppLoading from 'expo-app-loading';

const Separator = () => (
  <View style={styles.separator} />
);

{
return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathe slowly, calmly, inhaling through your nose and exhaling long and softly through your mouth</Text>
    </View>
  );
} 

export default function App(): JSX.Element {
  let [fontsLoaded] = useFonts({
    'courier-prime': require('./assets/fonts/courier-prime.ttf'),
  });
  
const styles = StyleSheet.create({
  container: {
  flex: 1,
      backgroundColor: "#d5e7ed",
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    title: {
      color: '#ffffffb6',
      fontFamily: 'courier-prime',
      fontSize: 100,
    },
 },
