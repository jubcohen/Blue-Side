import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import {Video} from 'expo-av';

import { styles } from '../../Styles';


export default function Respiracao2(): JSX.Element {
  const navigation = useNavigation<propsStack>();
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  
  return (
    <View style={styles.containerRespiracao}> 
        <TouchableOpacity
              style={styles.botaoBackRespiracao2}
              onPress={() => navigation.goBack()}>
          <Text style={styles.textobotao}>Back</Text>
        </TouchableOpacity> 

        <Video
        ref={video}
        style={styles.video}
        source={require('../Respiracao/videos/video2.mp4')}
        useNativeControls
        resizeMode="stretch"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

     </View>
     
  );
}

