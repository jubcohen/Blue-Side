import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
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
    <View style={styles.containerBlog}> 
        <StatusBar hidden />
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, marginTop: -20 }} />
          </TouchableOpacity> 
        </View>      
        <Text style={styles.titleRespiracao}>Blog</Text>
        <Text style={styles.boxBlog}>Text 1 </Text>
        <Text style={styles.boxBlog}>Text 2 </Text>
        <Text style={styles.boxBlog}>Text 3 </Text>
        <Text style={styles.boxBlog}>Text 4 </Text>
    </View>
  );
}
