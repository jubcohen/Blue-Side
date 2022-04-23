import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";


import { styles } from '../../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BlogPage1(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const B = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{fontFamily: 'Montserrat-Extrabold', color: '#438788'}}>{props.children}</Text>

  const [fontsLoaded] = useFonts({
    'courier-prime': require('../../../../assets/fonts/courier-prime.ttf'),
    'courier-prime-bold': require('../../../../assets/fonts/courier-prime-bold.ttf'),
    'Montserrat-Light': require('../../../../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('../../../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Extrabold': require('../../../../assets/fonts/Montserrat-Extrabold.ttf'),
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
        <Text style={styles.titleBlogPage1}>Introduction to anxiety, what is it?</Text>
    </View>
    <View style={styles.containerScrollBlogPage1}> 
    <ScrollView>
      <Image source={require('../../../../assets/imagens/imprint-of-hand-on-fabric.png')} style={{marginLeft: 50}}/>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 14,
          textAlign: 'left',
          margin: 10,
        }}>Writen by: David A. Clarck, Aaron Temkin Beck</Text>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 14,
          textAlign: 'left',
          marginRight: 10,
          marginLeft: 10,
        }}>The Anxiety and Worry Workbook: The Cognitive Behavioral Solution</Text>
      <Text style= {styles.textBlogPage1}> <B>Fear</B> is a basic automatic response to a specific object, situation or circumstance that involves a recognition (perception) of actual or potential danger. For a person with
arachnophobia, anything that suggests the possible presence of a spider, such as a spider's web,
an old house, walking in a forest, even a photograph of a spider, <B>can provoke fear</B>.</Text>
      <Text style= {styles.textBlogPage1}>Whenever the person is out, he or she may be <B> constantly thinking</B>: “Am I not going to
find a spider?”, “Spiders are dangerous because they can get into your mouth or eyes, ears and lay eggs” or “If I see a spider, I will freak out”. <B> Physically</B>, that person can
feel tense, restless, have butterflies in your stomach, tightness in your chest, or your heart is always racing
when sees something that reminds he or she of spiders. And fear could cause a <B>change of
behavior</B>, such as avoiding places with risk of exposure to spiders. In terms of therapy
cognitive, the main characteristic of fear is a thought of threat or imminent danger to our
safety.</Text>
      <Image source={require('../../../../assets/imagens/full-shot-depressed-woman-with-pillow.png')} style={{marginLeft: 71}}/>
      <Text style= {styles.textBlogPage1}> <B>Anxiety</B>, in contrast, is a complex emotional state much longer than
it is often triggered by an initial fear. For example, you might feel ready to
think about visiting friends because they live in an old house where there might be spiders, or going to the movies because the movie might contain a scene with spiders. The basic fear is of meeting a spider,
but you live in a state of permanent worry about the future possibility of being exposed to
a spider. So worry is a more lasting experience than fear. It is a state of
apprehension and physical arousal events where you believe you cannot control or predict futures
aversive statements.</Text>
      <Text style= {styles.textBlogPage1}>As a result, you may feel anxious thinking about an
important interview, in going to a party where you don't know people, in traveling to a place
unknown, on your job performance or on a deadline. <B>Note that anxiety
it is always future-oriented</B>; it is governed by the idea of ​​"What if?". We are not anxious about the past, what has already happened; we get anxious about catastrophes or events
imagined future adverse events: “What if I forget everything during the test?”, “What if I can’t
finish work?”, “What if I have a panic attack at the supermarket?”, “What if I get the virus
from the H1N1 flu from being around people?”, “What if I find someone who reminds me of the
burglar who attacked me?”, “What if I lose my job?” This enduring emotional state that
we call.</Text>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 16,
          textAlign: 'center',
          marginRight: 10,
          marginLeft: 10,
        }}>Check the next session about Unraveling anxiety: physical, cognitive, behavioral and emotional symptoms</Text>
    </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('BlogPage2')}>
          <Ionicons name='arrow-forward-outline' size={45} color='#438788ca' style={{ marginLeft: 330, marginBottom: 12 }} />
        </TouchableOpacity>
    </View>
    </>
  );
}
