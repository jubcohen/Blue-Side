import { StyleSheet } from 'react-native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";


export default function Menu(): JSX.Element {
    const navigation = useNavigation<propsStack>();
    
    const [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f09e7f",
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: '#438788',
        fontFamily: 'courier-prime',
        alignContent: "center",
        fontSize: 60,
      },
})
