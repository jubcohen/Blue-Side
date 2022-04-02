import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';


import Respiracao from './Respiracao';

export const styles = StyleSheet.create({
  logo:{
    width:200,
    resizeMode:'contain',
  },
  
  container:{
    flex: 100, // não sei se o numero tá certo
    backgroundColor: "#bee1edd4",
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#ffffffb6',
    fontFamily: 'courier-prime',
    fontSize: 30,
  },
});

export default Respiracao