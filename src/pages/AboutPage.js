import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PAGE} from "../styles/pages";
import TopBar from "../components/TopBar";
import {COLORS} from "../styles/colors";

const AboutPage: () => Node = ({navigation}) => {
  const paragraphOne = "Tour De Brutal is a brutalism bike tour for Berlin. It was conceived by An and Amos.";
  const paragraphTwo = "At every stop you will find a QR code if you solve the riddle in the location’s description.";

  return (
    <View style={PAGE.background}>
      <TopBar navigation={navigation}/>
      <View style={styles.titleBox}>
        <Text style={styles.title}>What is this</Text>
      </View>

      <Text style={styles.text}>{paragraphOne}</Text>
      <Text style={styles.text}>{paragraphTwo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingBottom: 20,
    borderBottomColor: COLORS.black,
    borderBottomWidth: 4,
  },
  title: {
    marginTop: 20,
    fontWeight: "500",
    fontSize: 32,
    lineHeight: 40,
  },
  text: {
    width: "100%",
    textAlign: "left",
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 28,
  }
});

export default AboutPage;
