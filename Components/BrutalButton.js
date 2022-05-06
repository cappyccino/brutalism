import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BrutalButton = ({text}): Node => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 70,
    borderColor: "#2D0404",
    borderWidth: 2,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // fontFamily: "Encode Sans", // TODO
    textTransform: "uppercase",
    fontSize: 42,
    color: "#2D0404",
    fontWeight: "500",
  }
});

export default BrutalButton;
