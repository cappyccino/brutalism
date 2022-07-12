import type {Node} from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PAGE} from "../styles/pages";
import TopBar from "../components/TopBar";

const LocationsPage: () => Node = ({navigation}) => {

  return (
    <View style={PAGE.background}>
      <TopBar navigation={navigation}/>
      <Text>Coming soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO
});

export default LocationsPage;
