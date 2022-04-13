import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, StatusBar, Dimensions, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

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
        <View> 
          <Image source={require('../../../assets/artwork/CoverWeighless.jpeg')}/>
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