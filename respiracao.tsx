import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Image } from 'react-native';
import { useFonts } from 'expo-font'; 
import AppLoading from 'expo-app-loading';


export default function App(): JSX.Element {
  let [fontsLoaded] = useFonts({
    'courier-prime': require('./assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <image>
        source={require('./assets/fonts/imagens/iconerespiracao.png')}
        style={styles.logo}
      </image>
      <Text style={styles.title}>Breathe slowly, calmly, inhaling through your nose and exhaling long and softly through your mouth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:250,
    resizeMode:'contain'
  },
  container:{
    flex: 100, // não sei se o numero tá certo
    backgroundColor: "#FAF5F1",
    justifyContent: 'center',
    alignItems: 'center',
  },
    
  

  title: {
    color: '#ffffffb6',
    fontFamily: 'courier-prime-Regular',
    fontSize: 70,
  },
});



