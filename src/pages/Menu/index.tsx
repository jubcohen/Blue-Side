import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { styles } from './index';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

import Menu from './Menu';


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

export default Menu