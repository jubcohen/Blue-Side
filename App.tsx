import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CSS from 'csstype';

export default function App() {
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
    fontFamily: 'courier-prime',
    fontSize: 2,
  },

  title: {
      color: '#fff',
  }
});