import type {Node} from 'react';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PAGE} from "../styles/pages";
import {ABOUT_PAGE, HOME_PAGE} from "./navigation";

const HomeIconButton: () => Node = ({navigation}) => {
  const goHome = () => navigation.navigate(HOME_PAGE.name);
  return (
    <TouchableOpacity onPress={goHome}>
      <Image source={require('../../assets/icons/HomeIcon.png')}/>
    </TouchableOpacity>
  );
};

const AboutPage: () => Node = ({navigation}) => {
  return (
    <View style={PAGE.background}>
      <HomeIconButton navigation={navigation}/>
      <Text style={styles.topBar}>What is this</Text>
      <View/>
      <Text>{paragraph_one}</Text>
      <Text>{paragraph_two}</Text>
    </View>
  );
};

const paragraph_one = "Tour De Brutal is a brutalism bike tour for Berlin. It was conceived by An and Amos.";
const paragraph_two = "At every stop you will find a QR code if you solve the riddle in the location’s description";

const styles = StyleSheet.create({});

export default AboutPage;
