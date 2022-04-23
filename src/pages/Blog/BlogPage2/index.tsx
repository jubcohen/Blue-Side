import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";


import { styles } from '../../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BlogPage2(): JSX.Element {
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
      <View > 
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime',
          alignContent: "center",
          fontSize: 30,
          textAlign: 'center',
          marginLeft: 10,
        }}>Unraveling anxiety:</Text>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime',
          alignContent: "center",
          fontSize: 23,
          textAlign: 'center',
          marginLeft: 10,
        }}>physical, cognitive, behavioral and emotional symptoms</Text>
      </View>
    </View>
    <View style={styles.containerScrollBlogPage1}> 
    <ScrollView>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 17,
          textAlign: 'left',
          margin: 10,
        }}>Writen by: David A. Clarck, Aaron Temkin Beck</Text>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 17,
          textAlign: 'left',
          marginRight: 10,
          marginLeft: 10,
        }}>The Anxiety and Worry Workbook: The Cognitive Behavioral Solution</Text>
      <Image source={require('../../../../assets/imagens/imprint-of-hand-on-fabric.png')} style={{marginLeft: 50}}/>
      <Text style= {styles.textBlogPage1}> Part of the <B> definition of anxiety</B> is that it is complex. When you feel very anxious, <B> you are
affected physically, emotionally, behaviorally and, of course, cognitively</B>. You may not be aware of it when you are anxious, but in the anxious state your way of thinking, feeling, and
behaving is different than when you are not anxious. Here are some of the common effects of
anxiety:</Text>
      <Text style= {styles.textBlogPage1}><B>Physical symptoms:</B></Text>
        <Text style= {styles.textBlogPage1}>- Increased heart rate, palpitations</Text>
        <Text style= {styles.textBlogPage1}>- Shortness of breath, rapid breathing</Text>
        <Text style= {styles.textBlogPage1}>- Pain or pressure in the chest</Text>
        <Text style= {styles.textBlogPage1}>- Feeling of suffocation</Text>
        <Text style= {styles.textBlogPage1}>- Vertigo, dizziness</Text>
        <Text style= {styles.textBlogPage1}>- Sweating, hot flashes, chills</Text>
        <Text style= {styles.textBlogPage1}>- Nausea, upset stomach, diarrhea</Text>
        <Text style= {styles.textBlogPage1}>- Tremors, shivering</Text>
        <Text style= {styles.textBlogPage1}>- Tingling or numbness in the arms and legs</Text>
        <Text style= {styles.textBlogPage1}>- Weakness, imbalance, feeling faint</Text>
        <Text style= {styles.textBlogPage1}>- Muscle tension, stiffness</Text>
        <Text style= {styles.textBlogPage1}>- Dry mouth</Text>

      <Text style= {styles.textBlogPage1}><B>Cognitive symptoms:</B></Text>
        <Text style= {styles.textBlogPage1}>- The fear of losing control, being unable to face</Text>
        <Text style= {styles.textBlogPage1}>- Fear of physical harm or death fear of “going crazy”</Text>
        <Text style= {styles.textBlogPage1}>- Fear of negative evaluation from others</Text>
        <Text style= {styles.textBlogPage1}>- Frightening thoughts, images or memories</Text>
        <Text style= {styles.textBlogPage1}>- Perceptions of unreality </Text>
        <Text style= {styles.textBlogPage1}>- Low concentration, confusion, distractibility</Text>
        <Text style= {styles.textBlogPage1}>- Narrowed attention, hypervigilance for danger</Text>
        <Text style= {styles.textBlogPage1}>- Weak memory</Text>
        <Text style= {styles.textBlogPage1}>- Difficulty in reasoning and loss of objectivity</Text>
        
      <Text style= {styles.textBlogPage1}><B>Behavioral symptoms:</B></Text>
        <Text style= {styles.textBlogPage1}>- Avoidance of threatening signals or situations</Text>
        <Text style= {styles.textBlogPage1}>- Escape, reassurance</Text>
        <Text style= {styles.textBlogPage1}>- Restlessness, agitation, walk nervously from one side to the another</Text>
        <Text style= {styles.textBlogPage1}>- Paralysis, immobility</Text>
        <Text style= {styles.textBlogPage1}>- Hyperventilation</Text>
        <Text style= {styles.textBlogPage1}>- Difficulty speaking</Text>

      <Text style= {styles.textBlogPage1}><B>Emotional symptoms:</B></Text>
        <Text style= {styles.textBlogPage1}>- Feeling nervous, tense, irritated</Text>
        <Text style= {styles.textBlogPage1}>- Feeling scared, fearful, terrified</Text>
        <Text style= {styles.textBlogPage1}>- Being irascible, apprehensive, excited</Text>
        <Text style= {styles.textBlogPage1}>- Being impatient, frustrated</Text>
        

        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 16,
          textAlign: 'center',
          marginRight: 10,
          marginLeft: 10,
        }}>Check the next session about “A.C.A.L.M.E-S.E” technique</Text>
    </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('BlogPage3')}>
          <Ionicons name='arrow-forward-outline' size={45} color='#438788ca' style={{ marginLeft: 330, marginBottom: 12 }} />
        </TouchableOpacity>
    </View>
    </>
  );
}
