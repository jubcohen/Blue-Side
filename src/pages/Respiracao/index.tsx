import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation, useRoute } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

export default function Respiracao(): JSX.Element {
  let [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const params = useRoute()
  const navigation = useNavigation<propsStack>();
  
  return (
    <><TouchableOpacity
      style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
      onPress={() => navigation.goBack()}>
      <Text>Voltar</Text>
    </TouchableOpacity><View style={styles.container}>
        <Image
          source={require('../../../assets/imagens/iconerespiracao.png')}
          style={styles.logo} />
        <Text style={styles.title}>Breathe slowly, calmly, inhaling through your nose and exhaling long and softly through your mouth</Text>
      </View></>
  );
}


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
