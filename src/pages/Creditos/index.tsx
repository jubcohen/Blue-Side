import React from 'react';
import { Text, Linking, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";


import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Creditos(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const B = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{fontFamily: 'Montserrat-Extrabold', color: '#438788'}}>{props.children}</Text>

  const A = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{color: '#438788', fontFamily: 'Montserrat-Bold'}}>{props.children}</Text>

  const N = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{fontFamily: 'Montserrat-Bold'}}>{props.children}</Text>

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    'courier-prime-bold': require('../../../assets/fonts/courier-prime-bold.ttf'),
    'Montserrat-Light': require('../../../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Extrabold': require('../../../assets/fonts/Montserrat-Extrabold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <><View style={styles.containerBlogPage1}>
      <StatusBar hidden />
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, marginTop: 20 }} />
        </TouchableOpacity>
      </View>
        <Text style={styles.titleCreditos}>Credits</Text>
    </View>
    <View style={styles.containerCreditosScroll}> 
    <ScrollView>
      <Text style= {styles.textBlogPage1}>A space to give the recognition to the people who supported us 
      as well as credits to the images, audios and research used to make this app.</Text>
      <Text style= {styles.textBlogPage1}><B>The Golden Writers</B> team is completely grateful 
      for all the support on this wonderful project. 
      We are immensely grateful to our mentors Danilo, Thais, and 
      Tong and the Technovation Girls program 
      for this incredible experience.</Text>  

      <Text style= {styles.textBlogPage1}>  <N>Image credits:</N> </Text>

      <Text style={styles.links} onPress={() => Linking.openURL("https://br.freepik.com/fotos-vetores-gratis/abstrato")}>
      Abstrato foto criado por freepik - br.freepik.com
      </Text>
      <Text style={styles.links} onPress={() => Linking.openURL("https://br.freepik.com/fotos-vetores-gratis/mulher")}>
      Mulher foto criado por freepik - br.freepik.com
      </Text>
      <Text style={styles.links} onPress={() => Linking.openURL("https://br.freepik.com/fotos-vetores-gratis/agua")}>
      Água foto criado por brgfx - br.freepik.com
      </Text>
      <Text style={styles.links} onPress={() => Linking.openURL("https://br.freepik.com/fotos-vetores-gratis/arvore")}>
      Árvore foto criado por wirestock - br.freepik.com
      </Text>
      <Text style={styles.links} onPress={() => Linking.openURL("https://br.freepik.com/fotos-vetores-gratis/montanha")}>
      Montanha foto criado por wirestock - br.freepik.com
      </Text>

      <Text style= {styles.textBlogPage1}>
        <N>Music credits: </N>
      </Text>
        <Text style={styles.links} onPress={() => Linking.openURL("https://youtu.be/pWjmpSD-ph0?list=PLAto996p5hPZpSFLyVww1yZfeghH7-zuJ")}> 
          Royalty free music by Bensound
        </Text> 
      <Text style= {styles.textBlogPage1}> 
        <N>Credits for the blog article:</N>
      </Text>
      <Text style= {styles.textBlogPage1}> 
        A. CLARCK, David; TEMKIN BECK, Aaron. The Anxiety and Worry Workbook: The Cognitive Behavioral Solution. 2011.
        </Text>
        <Text style= {styles.textBlogPage1}> 
        Psychologist - Priscila da Silva Macacari </Text>
      <Text style= {styles.textBlogPage1}>
        Just Think Differently - How Science Can Help You See The World Through New Eyes 
        and Eurekka.me on instagram
        </Text> 

    </ScrollView>
    
    </View>
    </>
  );
}
