import type {Node} from 'react';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const NavigationBar = ({text, onPress}): Node => {
  return (
    <View style={styles.button}>

      {/*<Text style={styles.buttonText}>{text}</Text>*/}
    </View>
  );
};

const styles = StyleSheet.create({
});

export default NavigationBar;
