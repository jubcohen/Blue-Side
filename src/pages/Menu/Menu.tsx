import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import { styles } from './index';



export default function Menu(): JSX.Element {
    let [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const navigation = useNavigation<propsStack>();
    return (
        <View> style={styles.container}
            <Text style={styles.title}>Welcome to Blue Side</Text>
            <TouchableOpacity
                style={{ marginTop: 12, padding: 9, backgroundColor: "#438788", }}
                onPress={() => navigation.navigate("Respiracao")}>
                <Text>Respiração</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 12, padding: 9, backgroundColor: "#438788", }}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}
