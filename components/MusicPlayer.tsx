import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import {styles} from '../src/Styles'
import Ionicons from "react-native-vector-icons/Ionicons";

const MusicPlayer = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Ionicons name='heart-outline' size={30} />
            <Text> Music Player</Text>
        </View>
    )
}

export default MusicPlayer;