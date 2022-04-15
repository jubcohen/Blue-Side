import React, { useEffect, useRef, useState} from 'react';
import { Text, 
  Animated, 
  SafeAreaView, 
  View, 
  TouchableOpacity, 
  StatusBar, 
  Dimensions, 
  Image, 
  FlatList, 
} from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import TrackPlayer, {
  Capability,
  Event, 
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { styles } from '../../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import songs from '../../../assets/infoSongs';

const togglePlayBack =async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();

  if ( currentTrack != null ) {
    if( playbackState == State.Paused ) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}

export default function MusicPlayer(): JSX.Element {

    const navigation = useNavigation<propsStack>();

    const { width, height } = Dimensions.get('window');

    const setupPlayer =async () => {
      await TrackPlayer.setupPlayer();

      await TrackPlayer.add(songs);
    }

    const playbackState = usePlaybackState();
    const scrollX = useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex] = useState(0);
    
    const songSlider = useRef(null);

    useEffect(() => {
      setupPlayer();
      scrollX.addListener(({ value }) => {
        // console.log('Scroll X', scrollX);
        // console.log('Device Width ', width);
        const index = Math.round( value / width);
        setSongIndex(index);

        //console.log('Index: ', index);
      });

      return () => {
        scrollX.removeAllListeners();
      }
    }, []);
    
    const skipToNext = () => {
      songSlider.current.scrollToOffset({
        offset: (songIndex + 1) * width,
      })
    }

    const skipToPrevious = () => {
      songSlider.current.scrollToOffset({
        offset: (songIndex - 1) * width,
      })
    }

    const [fontsLoaded] = useFonts({
      'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    

    const renderSongs = ({ index, item }: { index: any; item: any; }) => {
      return (
        <Animated.View style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={styles.artworkWeightless}>
            <Image
              source={item.artwork}
              style={styles.artworkImg} />
          </View>
        </Animated.View>
      );
    };

    return (
      <SafeAreaView style={styles.containerMusicas}>

        <View style={styles.containerMusicasMain}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={45} color='#438788ca' style={{ marginLeft: -190, }} />
        </TouchableOpacity>
          <View style={{width : width}}> 
            <Animated.FlatList
              ref={songSlider}
              data={songs}
              renderItem={renderSongs}
              keyExtractor={(item) => item.id}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {
                    contentOffset: { x: scrollX }
                  }
                }],
                {useNativeDriver: true}
              )} />
          </View>
          <View>
            <Text style={styles.songTitle}>{songs[songIndex].title}</Text>
            <Text style={styles.artistTitle}>{songs[songIndex].artist}</Text>
          </View>

          <View>
            <Slider
              style={styles.progressContainer}
              value={10}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor='#FFD369'
              maximumTrackTintColor='#e4e4e4'
              onSlidingComplete={() => { } } />
            <View style={styles.progessLabelContainer}>
              <Text style={styles.progressLabelTxt}>0:00</Text>
              <Text style={styles.progressLabelTxt}>3:55</Text>

            </View>
          </View>

          <View style={styles.musicControlls}>
            <TouchableOpacity onPress={() => {{
              songSlider.current.scrollToOffset({
              offset: (songIndex - 1) * width,
              })
              }} }>
              <Ionicons name='play-skip-back-outline' size={35} color='#FFD369' style={{ marginTop: 25 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => togglePlayBack(playbackState) }>
              <Ionicons name={playbackState == State.Playing ? 'ios-pause' : 'ios-pause-circle'} size={75} color='#FFD369' />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Ionicons name='play-skip-forward-outline' size={35} color='#FFD369' style={{ marginTop: 25 }} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomControl}>
            <TouchableOpacity onPress={() => { } }>
              <Ionicons name='heart-outline' size={30} color='#000000' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { } }>
              <Ionicons name='repeat' size={30} color='#000000' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { } }>
              <Ionicons name='share-outline' size={30} color='#000000' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { } }>
              <Ionicons name='ellipsis-horizontal' size={30} color='#000000' />
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }

