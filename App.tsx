import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'courier-prime': require('./assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blue Side</Text>
      <StatusBar style="auto"/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5e7ed",
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#fff',
    fontFamily: 'courier-prime',
    fontSize: 100,
  }
});