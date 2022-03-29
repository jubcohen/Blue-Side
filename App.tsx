import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { useFonts } from 'expo-font'; 
import AppLoading from 'expo-app-loading';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App(): JSX.Element {
  let [fontsLoaded] = useFonts({
    'courier-prime': require('./assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blue Side</Text>
      <Separator />
      <Button 
      title="Click here to start" 
      onPress={() => Alert.alert('take to menu') }
      color="#438788" />
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
    color: '#ffffffb6',
    fontFamily: 'courier-prime',
    fontSize: 100,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  separator: {
    marginVertical: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});