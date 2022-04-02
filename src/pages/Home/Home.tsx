import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import { styles } from './index';


export default function Home(): JSX.Element {
    let [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const navigation = useNavigation<propsStack>();
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
                source={require('../../../assets/imagens/logo.png')} />
            <Text style={styles.title}>Blue Side</Text>
            <TouchableOpacity
                style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
                onPress={() => navigation.navigate("Respiracao")}>
                <Text>Click here to start</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            <Text style={styles.espaco}></Text>
            <Text style={styles.subtitle}>by Golden Writers</Text>
        </View>
    );
}
