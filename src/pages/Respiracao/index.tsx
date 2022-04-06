
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import { styles } from '../Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
              style={styles.botaoback}
              onPress={() => navigation.goBack()}>
          <Text style={styles.textobotao}>Back</Text>
        </TouchableOpacity>
        <Image
            source={require('../../../assets/imagens/iconerespiracao.png')}
            style={styles.iconerespiracao} />
           <Text style={styles.titlerespiracao}>Breathe slowly, calmly, inhaling through your nose and exhaling long and softly through your mouth</Text>
     </View>
     
  );
}

