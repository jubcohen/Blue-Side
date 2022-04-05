import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import {styles} from '../Home'

export default function Menu(): JSX.Element {
    const navigation = useNavigation<propsStack>();

    const [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.botaoback}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textobotao}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.titlemenu}>Welcome to Blue Side</Text>
            <TouchableOpacity
                style={styles.botaorespiracao}
                onPress={() => navigation.navigate("Respiracao")}>
                <Text style={styles.textobotao}>Breathing Practice</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Blog")}>
                <Text style={styles.textobotao}>Blog</Text>
            </TouchableOpacity>
        </View>
    );
}

