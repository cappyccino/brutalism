import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import HomePage from "./src/pages/HomePage";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ListPage from "./src/pages/ListPage";

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'}/>
      <View style={styles.background}>
        <View style={styles.topBar}/>

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="List" component={ListPage}/>

          </Stack.Navigator>
        </NavigationContainer>

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
  },
  topBar: {
    backgroundColor: "#2D0404",
    height: 4,
    width: "100%",
    marginBottom: 15
  },
});

export default App;
