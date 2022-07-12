import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BrutalButton from "../components/BrutalButton";
import {PAGE} from "../styles/pages";
import {COLORS} from "../styles/colors";
import {ABOUT_PAGE, LOCATIONS_PAGE, SCAN_PAGE} from "./navigation";

const TitleBox = () =>
  <View style={styles.titleBox}>
    <Text style={styles.title}>Tour De Brutal</Text>
    <Text style={styles.subtitle}>Berlin</Text>
  </View>;

const HomePage = ({navigation}) => {
  return (
    <>
      <View style={styles.topBar}/>

      <View style={[PAGE.background, styles.homepage]}>
        <TitleBox/>

        <BrutalButton
          text={"Locations"}
          onPress={() => navigation.navigate(LOCATIONS_PAGE.name)}
        />
        <BrutalButton
          text={"scan QR"}
          onPress={() => navigation.navigate(SCAN_PAGE.name)}
        />
        <BrutalButton
          text={"what is this"}
          onPress={() => navigation.navigate(ABOUT_PAGE.name)}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homepage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingTop: 0,
  },
  topBar: {
    backgroundColor: COLORS.black,
    height: 4,
    width: "100%",
  },
  titleBox: {
    borderColor: COLORS.black,
    borderWidth: 4,
    width: "100%",
    alignItems: "center",
    padding: 16,
    marginBottom: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "500",
    color: COLORS.black,
  },
});

export default HomePage;
