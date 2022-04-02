import React from 'react';
import { StyleSheet, View, Button, SafeAreaView, Alert } from 'react-native';

import Home from './Home';

const Separator = () => (
  <View style={styles.separator} />
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bee1edd4",
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 100,
  },

  subtitle: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 20,
  },

  espaco: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 40,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  separator: {
    marginVertical: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Home