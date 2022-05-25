import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BrutalButton = ({text, onPress}): Node => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
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
