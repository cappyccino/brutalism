import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PAGE} from "../styles/pages";
import TopBar from "../components/TopBar";

const AboutPage: () => Node = ({navigation}) => {
  const paragraph_one = "Tour De Brutal is a brutalism bike tour for Berlin. It was conceived by An and Amos.";
  const paragraph_two = "At every stop you will find a QR code if you solve the riddle in the location’s description";

  return (
    <View style={PAGE.background}>
      <TopBar navigation={navigation}/>
      <Text style={styles.topBar}>What is this</Text>
      <View/>
      <Text>{paragraph_one}</Text>
      <Text>{paragraph_two}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO
});

export default AboutPage;
