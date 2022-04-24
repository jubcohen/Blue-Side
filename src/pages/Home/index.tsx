import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";


export default function Home(): JSX.Element {
  const navigation = useNavigation<propsStack>();
  
  const [fontsLoaded] = useFonts({
      'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
      return <AppLoading />;
  }

  return (
      <View style={styles.container}>
          <StatusBar hidden />
          <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
              source={require('../../../assets/imagens/logo.png')} />
          <Text style={styles.title}>Blue Side</Text>
          <TouchableOpacity
              style={styles.botaoinicio}
              onPress={() => navigation.navigate("Menu")}>
              <Text style={styles.textobotao}>Click here to start</Text>
          </TouchableOpacity>
          <Text style={styles.espaco}></Text>
          <Text style={styles.subtitle}>by Golden Writers</Text>
      </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bee1edd4",
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 100,
  },

  subtitle: {
    color: '#0000007c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 20,
  },

  textobotao: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },

  botaoinicio: { 
    marginTop: 12, 
    padding: 9, 
    backgroundColor: "#438788", 
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    width:280, 
    height:40,
  },

  iconerespiracao:{
    width:200,
    resizeMode:'contain',
    alignContent: 'center',
  },

  espaco: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 40,
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

  titlerespiracao: {
    color: '#0000009c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 30,
  },

  botao: { 
    marginTop: 12, 
    padding: 9, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788',
  },

  botaoback: { 
    marginTop: 12, 
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'center',
    alignContent: 'center',
  },

  titlemenu: {
    color: '#438788',
    fontFamily: 'courier-prime',
    alignContent: "center",
    textAlign: 'center',
    fontSize: 60,
  },
});