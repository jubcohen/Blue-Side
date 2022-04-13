
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
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
    <View style={styles.containerRespiracao}> 
        <TouchableOpacity
              style={styles.botaoBackRespiracao}
              onPress={() => navigation.goBack()}>
          <Text style={styles.textobotao}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.titleRespiracao}>Breathing Practice</Text>
        <Text style={styles.textoRespiracao1}>Click below to start{"\n"} your breathing practice</Text>
        <TouchableOpacity
                style={styles.botaoRespiracao2}
                onPress={() => navigation.navigate("Respiracao2")}>
                  <Image source={require('../../../assets/imagens/iconeMusica.png')}
                    style={styles.iconeMusica2} />
            </TouchableOpacity> 
        
     </View>
     
  );
}

