import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import Home from "../../pages/Home";
import Respiracao from "../../pages/Respiracao";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    let [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen 
                name="Home" 
                component={Home}/>
            <Screen name="Respiracao" component={Respiracao} 
                options={{
                    title: 'Respiração',
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
        </Navigator>
    )
}
