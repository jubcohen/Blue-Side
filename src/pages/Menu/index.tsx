import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

import {styles} from '../../Styles'

export default function Menu(): JSX.Element {
    const navigation = useNavigation<propsStack>();

    const [fontsLoaded] = useFonts({
        'courier-prime': require('../../../assets/fonts/courier-prime.ttf'),
        'courier-prime-bold': require('../../../assets/fonts/courier-prime-bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}> 
                <TouchableOpacity
                    style={styles.botaoBack}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.textobotaoback}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.textobotaoback}>Login</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.titlemenu}>Welcome to Blue Side</Text>

            <TouchableOpacity
                style={styles.botaoRespiracao}
                onPress={() => navigation.navigate("Respiracao")}>
                <Image source={require('../../../assets/imagens/iconeRespiracao2.png')}
                    style={styles.iconeRespiracao} />
                <Text style={styles.textobotaorespiracao}>Breathing Practice</Text>
            </TouchableOpacity>

            <View style={{ margin: 1, width: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={styles.botaoBlog}
                    onPress={() => navigation.navigate("Blog")}>
                    <Image source={require('../../../assets/imagens/iconeBlog.png')}
                    style={styles.iconeBlog} />
                    <Text style={styles.textobotaoBlog}>Blog</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botaoMusica}
                    onPress={() => navigation.navigate("Musicas")}>
                    <Image source={require('../../../assets/imagens/iconeMusica.png')}
                    style={styles.iconeMusica} />
                    <Text style={styles.textobotaoMusica}>Songs</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                    style={styles.botaoCreditos}
                    onPress={() => navigation.navigate("Creditos")}>
                    <Image source={require('../../../assets/imagens/iconeCreditos.png')}                    style={styles.iconeCreditos} />
                    <Text style={styles.textobotaoCreditos}>Credits</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

