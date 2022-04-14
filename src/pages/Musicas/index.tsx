import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import Slider from '@react-native-community/slider';
import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Respiracao(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const { width, height } = Dimensions.get('window');

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
        <View style={styles.artworkWeightless}> 
          <Image 
            source={require('../../../assets/artwork/CoverWeightless.jpeg')}
            style={styles.artworkImg}
            />
        </View>

        <View>
          <Text style={styles.songTitle}> Song Title</Text>
          <Text style={styles.artistTitle}> Song Artist</Text>
        </View> 

        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue= {100}
            thumbTintColor='#FFD369'
            maximumTrackTintColor='#FFF'
            onSlidingComplete={()=> {}}
          />
          <View style={styles.progessLabelContainer}> 
            <Text style={styles.progressLabelTxt}>0:00</Text>
            <Text style={styles.progressLabelTxt}>3:55</Text>

          </View>
        </View>

        <View style={styles.musicControlls}>
          <TouchableOpacity onPress={()=>{}}> 
            <Ionicons name='play-skip-back-outline' size={35} color='#FFD369'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}> 
            <Ionicons name='ios-pause-circle' size={75} color='#FFD369'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}> 
            <Ionicons name='play-skip-forward-outline' size={35} color='#FFD369'/>
          </TouchableOpacity>
        </View>

    </View>

    <View style = {styles.bottomContainer}>
      <View style= {styles.bottomControl}> 
      <TouchableOpacity onPress={()=>{}}> 
        <Ionicons name='heart-outline' size={30} color= '#000000'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}> 
        <Ionicons name='repeat' size={30} color= '#000000'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}> 
        <Ionicons name='share-outline' size={30} color= '#000000'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}> 
        <Ionicons name='ellipsis-horizontal' size={30} color= '#000000'/>
      </TouchableOpacity>

      </View>
    </View>
    </SafeAreaView>
  );
}