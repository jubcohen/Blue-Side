import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models"
import { styles } from '../../Styles';
import {videos} from 'react-native-video';
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
        <Image
            source={require('../../../assets/imagens/iconerespiracao.png')}
            style={styles.iconerespiracao2} />
           <Text style={styles.titlerespiracao}>Breathe slowly, calmly, inhaling through your nose and exhaling long and softly through your mouth</Text>
          
          
           <video id="videorespiracao" className="videorespiracao" loop autoPlay muted >
           <source src='C:\Users\anavi\blue\src\pages\Respiracao\videos\2.mp4' type='video/mp4'></source>
           </video>

        
     </View>
         
  );
}