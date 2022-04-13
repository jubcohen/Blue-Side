import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Respiracao(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <SafeAreaView style={styles.containerMusicas}> 
    <View style={styles.containerMusicasMain}> 
        <TouchableOpacity
              style={styles.botaoBack}
              onPress={() => navigation.goBack()}>
          <Text style={styles.textobotao}>Back</Text>
        </TouchableOpacity>
        <Ionicons name='heart-outline' size={30} />
        <Text> Music Player</Text>
    </View>
    </SafeAreaView>
  );
}
