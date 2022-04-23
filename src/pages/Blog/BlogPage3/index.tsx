import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Stack/Models";


import { styles } from '../../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BlogPage3(): JSX.Element {
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
        <Text style={styles.titleBlogPage1}>“A.C.A.L.M.E-S.E” technique</Text>
    </View>
    <View style={styles.containerScrollBlogPage1}> 
    <ScrollView>
        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 17,
          textAlign: 'left',
          margin: 10,
        }}>Writen by: Psychologist - Priscila da Silva Macacari</Text>
        
      <Image source={require('../../../../assets/imagens/imprint-of-hand-on-fabric.png')} style={{marginLeft: 50}}/>
      <Text style= {styles.textBlogPage1}> Use this technique whenever you can't control your emotions. Negative feelings tend to
disappear after you are aware of your reactions.</Text>
      <Text style= {styles.textBlogPage1}><B>Accept your anxiety </B>– The most important thing in dealing with anxiety is to fully accept it. Accept what
we cannot change is the best way, and the first step, to change. Stay in
the present, this is because <B>anxious people live in the future and miss the present</B>. They live in the “What if this comes to
occur?”, “What if I can’t?”, “What if I don’t find someone who loves me?”. Accepting anxiety makes
let her disappear. Fighting her to avoid her causes an increase.</Text>

      <Text style= {styles.textBlogPage1}><B>Contemplate things around you </B>– After this quick dialogue about how you feel, avoid staring at
inside you focusing on what you feel. Trust that your body will take care of everything very well. Look
outside of yourself. Describe to yourself what you observe abroad. You're anxious, but it's not the
anxiety.</Text>

      <Text style= {styles.textBlogPage1}><B>Act on your anxiety </B>– Keep acting as if you are not anxious. Slow down the pace at which you do the
things, but stay active. Do not run away from
tasks you are doing or will do. If you run away, the anxiety goes down, but the fear increases and the next time
it could be worse. Keep acting, slowly but acting.</Text>

      <Text style= {styles.textBlogPage1}><B>Liberate the air from your lungs </B>– Breathe in slowly, calmly, inhaling the air through your nose and exhaling long and
gently by mouth. Bring air into your abdomen, puffing it out as you inhale and letting it shrink as you breathe in.
expire. As you exhale, don't blow, but let the air out slowly through your mouth. People avoid panic attacks
with this exercise.</Text>

      <Text style= {styles.textBlogPage1}><B>Maintain the previous steps </B>– Repeat them. Continue to accept your anxiety; contemplate the outside; act with
her as an observer and breathe calmly.</Text>

      <Text style= {styles.textBlogPage1}><B>Examine your thoughts now </B>– You must be anticipating catastrophic things. Remember that in
other times when you felt like this they just didn't happen. Remember: you are anxious. This is
unpleasant but it's different from being dangerous!</Text>

      <Text style= {styles.textBlogPage1}><B>Smile, you did it! </B>– You deserve all your credit and all your recognition. Using these
resources, alone, you managed to calm down and overcome this unpleasant, frightening moment. It's not a victory
against an enemy, because there is no real enemy! You are learning to deal with unpleasant sensations
in itself that they exist for some emotional reason. Small stimuli in or outside the body generate
anxiety, which generates concentration in the body, triggering symptoms (tachycardia, sweating, dizziness, etc.), which
increases anxiety, which generates panic. All anxious imagination. There is no real enemy. The next time
remember this!</Text>

      <Text style= {styles.textBlogPage1}><B>Expect the best </B>– Avoid the fanciful thought that you will never have anxiety again. It is necessary for
live without having to get too high. What could be wrong is what you start to think when
perceive the presence of anxiety. The next time you try her, you'll know she's a “friend” who lets you know
that there is something disturbing and it´s not an enemy that will kill you or drive you mad! You just gave
important step towards reality. Next time it might be a lot easier.</Text>

        <Text style={{
          color: '#135858',
          fontFamily: 'courier-prime-bold',
          fontSize: 16,
          textAlign: 'center',
          marginRight: 10,
          marginLeft: 10,
        }}>Check the next session about Techniques for anxiety</Text>
    </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('BlogPage4')}>
          <Ionicons name='arrow-forward-outline' size={45} color='#438788ca' style={{ marginLeft: 330, marginBottom: 12 }} />
        </TouchableOpacity>
    </View>
    </>
  );
}
