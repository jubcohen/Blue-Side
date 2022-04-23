import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";


import { styles } from '../../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BlogPage4(): JSX.Element {
  const navigation = useNavigation<propsStack>();

  const B = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{fontFamily: 'Montserrat-Extrabold', color: '#438788'}}>{props.children}</Text>

  const A = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{color: '#438788', fontFamily: 'Montserrat-Bold'}}>{props.children}</Text>

  const N = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Text style={{fontFamily: 'Montserrat-Bold'}}>{props.children}</Text>

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
        <Text style={styles.titleBlogPage1}>Techniques for anxiety</Text>
    </View>
    <View style={styles.containerScrollBlogPage1}> 
    <ScrollView>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 17,
          textAlign: 'left',
          margin: 10,
        }}>Writen by: Sarah Edelman and Eurekka</Text>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 17,
          textAlign: 'left',
          marginRight: 10,
          marginLeft: 10,
        }}>Just Think Differently - How Science Can Help You See The World Through New Eyes 
        and Eurekka.me</Text>

      <Text style= {styles.textBlogPage1}>Below are some techniques for lowering anxiety levels.</Text>
      
      <Text style= {styles.textBlogPage1}><B>1- Diaphragmatic breathing</B></Text>
      <Text style= {styles.textBlogPage1}>Get into a relaxed, “lazy” position: breathe in through your nose for 4 seconds, hold your breath
for 2 seconds and exhale through your mouth for 6 seconds. Repeat until you feel calmer.</Text>
      <Text style= {styles.textBlogPage1}><B>2- Look around:</B></Text>
      <Text style= {styles.textBlogPage1}>During a whirlwind of thoughts: look around and tell the shape and colors of objects that
are around you. For example, “the tv is square and black”, the table is round and white”, “the
cushion is rectangular and blue”. This type of exercise makes you turn your attention to the
present moment and blurring of anxious thoughts.</Text>
      <Text style= {styles.textBlogPage1}><B>3- Therapeutic writing:</B></Text>
      <Text style= {styles.textBlogPage1}>In moments of very racing thoughts: grab a paper and a pen or use the pad of
notes from your cell phone and set aside 20 minutes to organize your messy thoughts into words or phrases.</Text>
      <Text style= {styles.textBlogPage1}><B>4- Safe place:</B></Text>
      <Text style= {styles.textBlogPage1}>Sitting or lying down, breathe in and breathe out very slowly. Close your eyes and imagine yourself in a place that
give you calm and peace. Note the details. <N>What do you see? What noises? What smells?</N> Dive in the scene and allow yourself to feel all calm and peace. When you want, come back to the breath and open your eyes.</Text>
      <Text style= {styles.textBlogPage1}><B>5- Grounding:</B></Text>
      <Text style= {styles.textBlogPage1}>Look around and find: 5 things you can see, 4 things you can touch, 3 sounds that
you can hear, 2 things you can smell and 1 thing you could taste. So
like the “look around” technique, the grounding technique helps us turn our attention to the
present moment and slow down</Text>
      <Text style= {styles.textBlogPage1}><B>Socratic questioning:</B></Text>
      <Text style= {styles.textBlogPage1}>This technique helps us reflect on our thoughts, think more rationally and
decreases the level of anxiety and concern.
Describe the situation or event that concerns you.
</Text>
      <Text style= {styles.textBlogPage1}><N>What do you specifically fear that may happen? </N></Text>
      <Text style= {styles.textBlogPage1}><N>Rate the probability of this happening (from 0 to 100%).
</N></Text>
      <Text style= {styles.textBlogPage1}><N>What evidence supports your thoughts?</N></Text>
      <Text style= {styles.textBlogPage1}><N>What evidence does not support?</N></Text>
      <Text style= {styles.textBlogPage1}><N>If the worst happens, what actions would you take?</N></Text>

      <Text style= {styles.textBlogPage1}>In realistic terms, what´s the worst thing that could happen?
   What´s the best thing that can happen?
   What is most likely to happen?
   Are there any useful actions you can take now?
   What would you say to a friend who was in the same situation?
   Rate the current anxiety level (from 0 to 100%) </Text>

   <Text style= {styles.textBlogPage1}><B>R E M E M B E R:</B></Text>
   <Text style= {styles.textBlogPage1}><A>You are not your anxiety.
Congratulate yourself on trying to control your anxiety.
Anxiety is a necessary emotion like any other, but fleeting.
No emotion lasts forever. You've been through moments like this and you've survived it.
You will also survive this current moment.</A></Text>
   
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 16,
          textAlign: 'center',
          marginRight: 10,
          marginLeft: 10,
        }}>New articles coming soon</Text>
    </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
          <Ionicons name='arrow-forward-outline' size={45} color='#438788ca' style={{ marginLeft: 330, marginBottom: 12 }} />
        </TouchableOpacity>
    </View>
    </>
  );
}
