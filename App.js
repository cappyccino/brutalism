import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomePage from "./Components/HomePage";

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>

        <View style={styles.topBar}/>
        <HomePage/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FAC8C8",
    flex: 1,
  },
  background: {
    flex: 1,
    color: "#2D0404",
    padding: 16,
    paddingTop: 0,
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "#2D0404",
    height: 4,
    width: "100%",
    marginBottom: 15
  },
});

export default App;
