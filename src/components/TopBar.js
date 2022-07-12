import type {Node} from 'react';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {HOME_PAGE} from "../pages/navigation";
import {COLORS} from "../styles/colors";

const TopBar: () => Node = ({navigation}) => {
  const goHome = () => navigation.navigate(HOME_PAGE.name);
  const iconUrl = '../../assets/icons/HomeIcon.png';

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={goHome} style={styles.homeButton}>
        <Image source={require(iconUrl)} style={styles.image}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    borderBottomColor: COLORS.black,
    borderBottomWidth: 2,
    paddingTop: 20,
    paddingBottom: 20,
  },
  homeButton: {
    width: "20%",
    borderColor: COLORS.black,
    borderWidth: 2,
    padding: 4,
  },
  image: {
    alignItems: "flex-end",
  },
});

export default TopBar;
