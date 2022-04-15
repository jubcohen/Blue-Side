import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import {Video} from 'expo-av';

import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, }} />
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

