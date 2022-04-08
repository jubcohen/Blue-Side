import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { styles } from '../../Styles';

export default function Respiracao(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View style={styles.container}> 
        <TouchableOpacity
              style={styles.botaoBack}
              onPress={() => navigation.goBack()}>
          <Text style={styles.textobotao}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.titlerespiracao}>Login</Text>
    </View>
  );
}