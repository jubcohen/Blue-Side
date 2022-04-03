import React from 'react';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

const Separator = () => (
  <View style={styles.separator} />
);

export default function Home(): JSX.Element {

  let [fontsLoaded] = useFonts({
      'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
      return <AppLoading />;
  }
  
  const navigation = useNavigation<propsStack>();

  return (
      <View style={styles.container}>
          <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
              source={require('../../../assets/imagens/logo.png')} />
          <Text style={styles.title}>Blue Side</Text>
          <TouchableOpacity
              style={{ marginTop: 12, padding: 9, backgroundColor: "#438788",}}
              onPress={() => navigation.navigate("Menu")}>
              <Text>Click here to start</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
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
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 100,
  },

  subtitle: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 20,
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
});