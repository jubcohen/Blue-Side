import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";


import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Blog(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <><View style={styles.containerBlog}>
      <StatusBar hidden />
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, marginTop: 10 }} />
        </TouchableOpacity>
      </View>
        <Text style={styles.titleRespiracao}>Blog</Text>
        </View>
      <View style={styles.containerScroll}> 
        <ScrollView>
          <TouchableOpacity style={styles.boxBlog1} onPress={() => navigation.navigate("BlogPage1")}>
            <View style={styles.box1}> 
            </View>
            <Text style={styles.textBlog1}>#1 Introduction to anxiety, what is it?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.boxBlog2} onPress={() => navigation.navigate("BlogPage2")}>
            <View style={styles.box2}> 
            </View>
            <Text style={styles.textBlog2}>#2 Unraveling anxiety: physical, cognitive, behavioral and emotional symptoms </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxBlog3} onPress={() => navigation.navigate("BlogPage3")}>
            <View style={styles.box3}> 
            </View>
            <Text style={styles.textBlog3}>#3 “A.C.A.L.M.E-S.E” technique</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxBlog4} onPress={() => navigation.navigate("BlogPage4")}>
            <View style={styles.box4}> 
            </View>
            <Text style={styles.textBlog4}>#4 Techniques for anxiety</Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    </>
  );
}
