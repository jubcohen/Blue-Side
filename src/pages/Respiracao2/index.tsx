import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import VideoPlayer from 'react-native-video';

import {Video, Audio} from 'expo-av';

import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Respiracao2(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const { width, height } = Dimensions.get('window');
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => 
  { Audio.setAudioModeAsync({playsInSilentModeIOS: true}); });

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  
  return (
    <View style={styles.containerRespiracao2}> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, marginTop: -115}} />
        </TouchableOpacity>
        <View style={{
              flex: -1,
              padding: 10,
              marginTop: -340,
              width: 390,
              height: 130,
              backgroundColor: "#FFDDD1",  
              borderWidth: 0.5,
              borderRadius: 20, 
              borderColor:'#FFDDD1',
              alignItems: 'flex-start',
              justifyContent: 'space-around',
            }}>
          <View style={{
                flex: -1,
                position: 'absolute',
                padding: 10,
                marginTop: 7,
                marginLeft: 10,
                width: 370,
                height: 113,
                backgroundColor: "#fffcfc96",  
                borderWidth: 0.5,
                borderRadius: 20, 
                borderColor:'#fffcfc96',
              }}> 
            </View>          
          <Text style={{
            color: '#135858',
            flex: -1,
            padding: 10,
            fontFamily: 'courier-prime',
            alignContent: "center",
            textAlign: 'center',
            fontSize: 20,
            backfaceVisibility: 'hidden',
              }}>Breathe slowly, calmly, inhaling through 
              your nose and exhaling long and 
              softly through your mouth </Text>
        </View>

        <View style={{
              flex: 0,
              backgroundColor: "#ffffff",
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: -245,
              marginVertical: 50,

            }}> 
        <Video
        ref={video}
        style={{
          alignSelf: 'stretch',
          width: width,
          height: 250,    
          alignItems: 'center',
          alignContent: 'center',
        }}
        source={require('../Respiracao/videos/respiracao5.mp4')}
        resizeMode="stretch"
        volume={1.0}
        shouldPlay
        onPlaybackStatusUpdate={setStatus}
        
        />
        </View> 
        
     </View>
     
  );
}

