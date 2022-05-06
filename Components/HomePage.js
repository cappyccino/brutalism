import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BrutalButton from "./BrutalButton";

const TitleBox: () => Node = () => {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}>Tour De Brutal</Text>
      <Text style={styles.subtitle}>Berlin</Text>
    </View>
  );
};

const HomePage: () => Node = () => {
  return (
    <View style={styles.homepage}>
      <TitleBox/>
      <BrutalButton text={"Locations"}/>
      <BrutalButton text={"scan QR"}/>
      <BrutalButton text={"what is this"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  titleBox: {
    borderColor: "#2D0404",
    borderWidth: 4,
    width: "100%",
    alignItems: "center",
    padding: 16,
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
    color: "#2D0404",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "500",
    color: "#2D0404",
  },
});

export default HomePage;
