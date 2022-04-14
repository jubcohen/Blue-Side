import React from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import Home from "../../pages/Home";
import Respiracao from "../../pages/Respiracao";
import Menu from "../../pages/Menu";
import Blog from "../../pages/Blog";
import Musicas from "../../pages/Musicas/MusicPlayer";
import Creditos from "../../pages/Creditos";
import Doacoes from "../../pages/Doacoes";
import Login from "../../pages/Login";
import Respiracao2 from '../../pages/Respiracao2';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function Stacks() {
    const [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen 
                name="Home" 
                component={Home} />
            <Screen 
                name="Menu"
                component={Menu}
                options={{
                    title: 'Menu',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  
                  }}
            />
            <Screen 
                name="Respiracao" 
                component={Respiracao} 
                options={{
                    title: 'Respiração',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            <Screen 
                name="Blog" 
                component={Blog} 
                options={{
                    title: 'Blog',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            
            <Screen 
                name="Musicas" 
                component={Musicas} 
                options={{
                    title: 'Songs',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            
            <Screen 
                name="Creditos" 
                component={Creditos} 
                options={{
                    title: 'Songs',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                      
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            
            <Screen 
                name="Doacoes" 
                component={Doacoes} 
                options={{
                    title: 'Songs',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            
            <Screen 
                name="Login" 
                component={Login} 
                options={{
                    title: 'Login',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />
            
            <Screen 
                name="Respiracao2" 
                component={Respiracao2} 
                options={{
                    title: 'Breathing Practice',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerTintColor: '#a81818',
                    headerTitleStyle: { fontFamily:'courier-prime'},
                  }}  />


        </Navigator>
    )
}
